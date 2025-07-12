# PDF Merge Utility

This Node.js utility helps you merge multiple PDF files into a single PDF and count the total number of pages in all PDF files within a folder.
It adds blank page at the end of a pdf file while merging for odd pages to avoid printing new file on the back of the last page of previous PDF file.

## Features

- **Count Pages:**  
    Use `node countpages.cjs` to count the total number of pages in all PDF files in a specified folder.

- **Merge PDFs:**  
    Use `node merge-pdfs.mjs` to merge all PDF files in a folder into a single PDF file.

## Usage
##### 1. Place your PDF files in the target folder.
##### 2. Modify the path of PDF files inside scripts.
##### 3. Open a terminal in the script directory.

### Count Total Pages

```bash
node countpages.cjs
```

### Merge PDF Files

```bash
node merge-pdfs.mjs
```

## Requirements

- Node.js installed on your system.

## License

MIT