async function checkServer() {
    try {
        const res = await fetch('http://localhost:3001/todos');
        if (res.ok) {
            console.log('Backend is responding!');
        } else {
            console.log('Backend returned status:', res.status);
        }
    } catch (e) {
        console.error('Backend is NOT responding:', e.message);
    }
}
checkServer();
