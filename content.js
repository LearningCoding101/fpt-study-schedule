// Function to enhance the UI of the schedule table
function enhanceScheduleTable() {
    const table = document.querySelectorAll('table')[1]; 
    // Adjust selector to target the correct table
    if (!table) return;
    // Apply styles to the table
    console.log(table);
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    table.style.margin = '20px 0';
  
    const headers = table.querySelectorAll('th');
    headers.forEach(header => {
      header.style.backgroundColor = '#007BFF';
      header.style.color = 'white';
      header.style.padding = '12px 15px';
      header.style.border = '1px solid #e0e0e0';
      header.style.textAlign = 'left';
    });
  
    const rows = table.querySelectorAll('tr');
    rows.forEach((row, index) => {
      const cells = row.querySelectorAll('td');
      cells.forEach(cell => {
        cell.style.padding = '12px 15px';
        cell.style.border = '1px solid #e0e0e0';
        cell.style.position = 'relative';
        cell.style.textAlign = 'left';
      });
      if (index % 2 === 0) {
        row.style.backgroundColor = '#f9f9f9';
      }
    });
  
    // Add color coding and tooltips for better visualization
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      
      cells.forEach(cell => {
        const text = cell.innerText.toLowerCase();
        cell.classList.remove('cell-attended', 'cell-absent', 'cell-not-yet'); // Remove previous classes
        if (text.includes('attended')) {
          cell.classList.add('cell-attended');
          cell.dataset.tooltip = 'Attended this activity';
        } else if (text.includes('not yet')) {
          cell.classList.add('cell-not-yet');
          cell.dataset.tooltip = 'Not attended yet';
        } else if (text.includes('absent')) {
          cell.classList.add('cell-absent');
          cell.dataset.tooltip = 'Absent from this activity';
        }
      });
    });
  
    // Add hover effect for tooltips
    table.addEventListener('mouseover', event => {
      if (event.target.dataset.tooltip) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = event.target.dataset.tooltip;
        document.body.appendChild(tooltip);
  
        const rect = event.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
      }
    });
  
    table.addEventListener('mouseout', () => {
      const tooltip = document.querySelector('.tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });
  }
  
  console.log("Setting up DOMContentLoaded event listener");

  // Run the function to enhance the schedule table when DOM is fully loaded
  window.addEventListener('load', () => {
    console.log("DOM fully loaded and parsed");
    enhanceScheduleTable();
  });

  // Log to confirm script execution
  console.log("Script execution continues...");