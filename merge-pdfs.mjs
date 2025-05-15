import { readdirSync } from 'fs';
import { join, extname } from 'path';
import PDFMerger from 'pdf-merger-js';

// Define the folder where your PDF files are stored
const folderPath = 'C:/Users/user/Downloads/<PATH>';  // <-- Change this to your folder path
// Define the output file name
const outputFilePath = join(folderPath, 'merged.pdf'); // Output file path

// Create a new instance of PDFMerger
const merger = new PDFMerger();

// Function to merge all PDF files in the folder
async function mergePDFFiles() {
    try {
        // Get all files in the folder
        const files = readdirSync(folderPath);

        // Loop through all files and add only PDFs to the merger
        for (const file of files) {
            if (extname(file).toLowerCase() === '.pdf') {
                const filePath = join(folderPath, file);
                console.log(`Adding: ${file}`);
                await merger.add(filePath); // Add each PDF file to the merger
            }
        }

        // Save the merged PDF as 'merged.pdf' in the same folder
        await merger.save(outputFilePath);
        console.log(`All PDF files merged successfully into: ${outputFilePath}`);
    } catch (err) {
        console.error("Error merging PDF files:", err);
    }
}

// Run the merging function
mergePDFFiles();
