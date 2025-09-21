window.addEventListener('load', () => {
    if (window.innerWidth <= 968) {
        // Ensure all resources are loaded
        const images = document.images;
        const scripts = document.scripts;
        const stylesheets = document.styleSheets;
        
        let loadedCount = 0;
        const totalResources = images.length + scripts.length + stylesheets.length;
        
        const checkAllLoaded = () => {
            loadedCount++;
            if (loadedCount >= totalResources) {
                // Add minimum 2 second delay to show the loader
                setTimeout(() => {
                    window.location.href = 'first.php';
                }, 2000);
            }
        };
        
        // Check images
        Array.from(images).forEach(img => {
            if (img.complete) {
                checkAllLoaded();
            } else {
                img.addEventListener('load', checkAllLoaded);
                img.addEventListener('error', checkAllLoaded); // Handle broken images
            }
        });
        
        // Scripts and stylesheets are already loaded when 'load' event fires
        for (let i = 0; i < scripts.length + stylesheets.length; i++) {
            checkAllLoaded();
        }
        
        // Fallback: redirect after 10 seconds maximum
        setTimeout(() => {
            window.location.href = 'first.php';
        }, 10000);
        
    } else {
        window.location.href = 'first.php';
    }
});