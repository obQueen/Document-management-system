// Sample document data (replace with actual data or fetch from a server)
const documents = [
  { projectCode: "OP123456", disciplineCode: "ENG", documentType: "REP", fileName: "Engineering Report 1.pdf", fileUrl: "files/Engineering_Report_1.pdf" },
  { projectCode: "OP654321", disciplineCode: "PRG", documentType: "PLN", fileName: "Project Plan.pdf", fileUrl: "files/Project_Plan.pdf" },
  { projectCode: "OP456789", disciplineCode: "FIN", documentType: "PAY", fileName: "Payment Invoice.pdf", fileUrl: "files/Payment_Invoice.pdf" },
  // Add more documents as needed
];

// Handle the search form submission
document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const query = document.getElementById('searchQuery').value.toLowerCase();
  const results = documents.filter(doc => 
    doc.projectCode.toLowerCase().includes(query) ||
    doc.disciplineCode.toLowerCase().includes(query) ||
    doc.documentType.toLowerCase().includes(query) ||
    doc.fileName.toLowerCase().includes(query)
  );

  displayResults(results);
});

// Display results in a table and show action buttons
function displayResults(results) {
  const resultsBody = document.getElementById('resultsBody');
  resultsBody.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    resultsBody.innerHTML = "<tr><td colspan='5'>No results found.</td></tr>";
    return;
  }

  results.forEach(doc => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${doc.projectCode}</td>
      <td>${doc.disciplineCode}</td>
      <td>${doc.documentType}</td>
      <td>${doc.fileName}</td>
      <td>
        <button onclick="viewFile('${doc.fileUrl}')">View</button>
        <button onclick="downloadFile('${doc.fileUrl}')">Download</button>
      </td>
    `;
    resultsBody.appendChild(row);
  });
}

// Simulate file view (in a real scenario, you can show the document in a new tab)
function viewFile(fileUrl) {
  window.open(fileUrl, '_blank'); // Opens the file in a new browser tab
}

// Simulate file download
function downloadFile(fileUrl) {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileUrl.split('/').pop(); // Use the filename for the download name
  link.click();
}

