// Compile a specified TS file into a JS file of the same name, into the same directory (i.e. index.ts to index.js)
// $ tsc index.ts

// Tell tsc to compile specified file whenever a change in saved by adding the watch flag (-w)
// $ tsc index.ts -w

// Compile specified file into specified output file
// $ tsc index.ts --outfile
//  out/script.js

// If no file is specified, tsc will compile all TS files in the "rootDir" and ouput in the "outDir".
// Add -w to watch for changes
// $ tsc -w