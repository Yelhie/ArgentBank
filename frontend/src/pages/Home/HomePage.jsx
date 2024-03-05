import Banner from '../../components/Banner/Banner';
import Feature from '../../components/Feature/Feature';

function Home() {
    return (
        <main className="main">
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Feature />
            </section>
        </main>
    );
}

export default Home;