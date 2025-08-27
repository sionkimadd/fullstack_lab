export default function Footer() {
    const currentYear: number = new Date().getFullYear();

    return (
        <div>
            <p>Copyright Pixell River Financial {currentYear}</p>
        </div>
    );
}