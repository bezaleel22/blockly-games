import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

function walk(dir: string, done: (err: NodeJS.ErrnoException | null, results?: string[]) => void, baseDir: string = dir): void {
    const results = new Set<string>();

    fs.readdir(dir, (err, list) => {
        if (err) return done(err);
        let i = 0;

        (function next() {
            let file = list[i++];
            if (!file) return done(null, Array.from(results)); // Convert Set to Array before passing to the callback
            file = path.resolve(dir, file);

            fs.stat(file, (err, stat) => {
                if (err) return done(err);

                if (stat && stat.isDirectory()) {
                    walk(file, (err, res) => {
                        if (err) return done(err);
                        res?.forEach(results.add, results); // Add new results to the Set
                        next();
                    }, baseDir);
                } else {
                    let relativePath = path.relative(baseDir, file);

                    // Add a forward slash at the beginning
                    relativePath = `/${relativePath}`;

                    // Replace 'index.html' with '/'
                    if (relativePath === '/index.html') {
                        relativePath = '/';
                    }

                    // Append '?lang=en' to all .html files
                    if (relativePath.endsWith('.html')) {
                        relativePath += '?lang=en';
                    }

                    // Skip 'sw.js'
                    if (relativePath !== '/sw.js') {
                        results.add(relativePath); // Add to Set to ensure uniqueness
                    }

                    next();
                }
            });
        })();
    });
}

const startDir = path.resolve(__dirname, '../public');
walk(startDir, (err, results) => {
    if (err) throw err;
    console.log(util.inspect(results, { maxArrayLength: null }));
});
