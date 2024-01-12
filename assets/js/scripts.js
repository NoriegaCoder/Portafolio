document.addEventListener('mousemove', function(e) {
    const XPercentaje = (e.clientX / window.innerWidth) * 100;
    const YPercentaje = ((e.clientY + window.scrollY) / window.innerHeight) * 100;

    const gradientColor = `radial-gradient(600px at ${XPercentaje}% ${YPercentaje}vh, rgba(29, 78, 216, 0.15), transparent 80%)`;

    document.querySelector('.gradiente').style.background = gradientColor;
});

