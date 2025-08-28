export default function Footer() {
    const currentYear: number = new Date().getFullYear();

    return (
        <div>
            <p className="footer inter-thin">Copyright Pixell River Financial {currentYear}</p>
        </div>
    );
}