// script.js - Interactive features for QA Portfolio

document.addEventListener('DOMContentLoaded', function() {
    console.log('QA Portfolio loaded successfully!');
    
    // 1. Interactive checklists
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const listItem = this.parentElement;
            if (this.checked) {
                listItem.style.color = '#27ae60';
                listItem.style.opacity = '0.7';
            } else {
                listItem.style.color = '#333';
                listItem.style.opacity = '1';
            }
        });
    });
    
    // 2. Add "Toggle All" buttons to checklists
    const checklistSections = document.querySelectorAll('.checklist');
    
    checklistSections.forEach(section => {
        const button = document.createElement('button');
        button.textContent = 'Toggle All';
        button.className = 'toggle-btn';
        
        button.addEventListener('click', function() {
            const checkboxesInSection = section.querySelectorAll('input[type="checkbox"]');
            const allChecked = Array.from(checkboxesInSection).every(cb => cb.checked);
            
            checkboxesInSection.forEach(cb => {
                cb.checked = !allChecked;
                cb.dispatchEvent(new Event('change'));
            });
        });
        
        const heading = section.querySelector('h3');
        if (heading) {
            heading.appendChild(button);
        }
    });
    
    // 3. Add "Print/Export PDF" button to test cases page
    if (document.querySelector('table')) {
        const printButton = document.createElement('button');
        printButton.textContent = '📄 Print/Export PDF';
        printButton.className = 'print-btn';
        printButton.style.cssText = 'display: block; margin: 20px auto; padding: 10px 20px; background: #27ae60; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;';
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        const tableSection = document.querySelector('table').parentElement;
        tableSection.appendChild(printButton);
    }
    
    // 4. Add test statistics counter
    if (document.querySelector('table')) {
        const passedCount = document.querySelectorAll('.passed').length;
        const failedCount = document.querySelectorAll('.failed').length;
        const pendingCount = document.querySelectorAll('.pending').length;
        
        const statsDiv = document.createElement('div');
        statsDiv.className = 'stats';
        statsDiv.innerHTML = `
            <p><strong>Test Statistics:</strong></p>
            <p>Total Tests: <strong>${passedCount + failedCount + pendingCount}</strong> | 
               Passed: <span style="color:#27ae60">${passedCount}</span> | 
               Failed: <span style="color:#e74c3c">${failedCount}</span> | 
               Pending: <span style="color:#f39c12">${pendingCount}</span></p>
        `;
        
        const table = document.querySelector('table');
        table.parentNode.insertBefore(statsDiv, table.nextSibling);
    }
});