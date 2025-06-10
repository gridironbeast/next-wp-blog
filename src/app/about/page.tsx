export default function Page() {
    return (
        <section>
            <h1 className="text-xl mb-4">About me</h1>
            <p className="mb-6">This is World 25/8 - a streamlined website designed for speed and flexibility
                By leveraging the power of technologies, which were used here, this website seamlessly queries
                data and displays content, providing a modern front-end experience with the robust backend
                capabilities of Wordpress
            </p>
            <p className="mb-6">With World 25/8 you can feel a taste of my life, my feeling etc.</p>
            <p className="mb-6">This setup allows you to focus on creating engaging content while 
                delivering it through a cutting-edge, headless acrhitecture.
            </p>
            <p className="mb-6">I hope you goys will enjoy it!</p>

            <div>
                <h2 className="text-lg mb-4">Project specs</h2>
                <ul className="list-disc list-inside">
                    <li>Next.js V15</li>
                    <li>TailwindCSS</li>
                    <li>Wordpress GraphQL</li>
                </ul>
            </div>
        </section>
    )
}