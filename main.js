/**
 * Copyright (c) 2025 MARION Games. All rights reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly
 * prohibited. Proprietary and confidential.
 *
*/

const API_BASE_URL = 'http://localhost:3000/api';

document.addEventListener('DOMContentLoaded', () => {
    const responseDiv = document.getElementById('response');

    // Function to display messages
    const showResponse = (message, type) => {
        responseDiv.textContent = message;
        responseDiv.className = type;
    };

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/logout`, {
                method: 'POST',
                credentials: 'include'
            });
            if (response.ok) {
                window.location.href = '/login.html';
            } else {
                showResponse('Logout failed.', 'error');
            }
        } catch (err) {
            showResponse('Could not connect to the server.', 'error');
        }
    });

    // Create folder functionality
    document.getElementById('createFolderBtn').addEventListener('click', async () => {
        const folderName = document.getElementById('folderName').value.trim();
        if (!folderName) {
            showResponse('Folder name is required.', 'error');
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/fs/folder`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ path: folderName })
            });
            const result = await response.json();
            if (response.ok) {
                showResponse(result.message, 'success');
                document.getElementById('folderName').value = '';
            } else {
                showResponse(result.error, 'error');
            }
        } catch (err) {
            showResponse('Could not connect to the server.', 'error');
        }
    });

    // Create file functionality
    document.getElementById('createFileBtn').addEventListener('click', async () => {
        const filePath = document.getElementById('filePath').value.trim();
        const fileContent = document.getElementById('fileContent').value;
        if (!filePath) {
            showResponse('File path is required.', 'error');
            return;
        }
        try {
            const response = await fetch(`${API_BASE_URL}/fs/file`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ path: filePath, content: fileContent })
            });
            const result = await response.json();
            if (response.ok) {
                showResponse(result.message, 'success');
                document.getElementById('filePath').value = '';
                document.getElementById('fileContent').value = '';
            } else {
                showResponse(result.error, 'error');
            }
        } catch (err) {
            showResponse('Could not connect to the server.', 'error');
        }
    });
});