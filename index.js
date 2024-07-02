function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(17, 25);
    document.getElementById('utc-time').textContent = utcTime;
    
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
    document.getElementById('current-day').textContent = dayOfWeek;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();