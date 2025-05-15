const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

// Folder path where your PDF files are stored
const folderPath = 'C:/Users/user/Downloads/<PATH>';  // <-- Change this to your folder path

let totalPageCount = 0;

// Function to read and parse PDF files
function countPagesInPDF(filePath) {
    return new Promise((resolve, reject) => {
        const dataBuffer = fs.readFileSync(filePath);
        pdf(dataBuffer).then(function (data) {
            // Return the number of pages in the PDF
            resolve(data.numpages);
        }).catch((error) => {
            reject(error);
        });
    });
}

// Main function to process all PDF files in the folder
async function processPDFFiles() {
    try {
        const files = fs.readdirSync(folderPath);
        
        for (const file of files) {
            if (path.extname(file).toLowerCase() === '.pdf') {
                const filePath = path.join(folderPath, file);
                const pageCount = await countPagesInPDF(filePath);
                totalPageCount += pageCount;
                console.log(`${file}: ${pageCount} pages`);
            }
        }

        console.log(`\nTotal pages in all PDFs: ${totalPageCount}`);
    } catch (err) {
        console.error("Error reading PDF files:", err);
    }
}

// Start the process
processPDFFiles();
