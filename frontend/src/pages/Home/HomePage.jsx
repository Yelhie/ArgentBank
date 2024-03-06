import Banner from '../../components/Banner/Banner';
import Feature from '../../components/Feature/Feature';

import IconChat from "../../assets/icon-chat.webp";
import IconMoney from "../../assets/icon-money.webp";
import IconSecurity from "../../assets/icon-security.webp";

function Home() {
    return (
        <main className="main">
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Feature img={IconChat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                <Feature img={IconMoney} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
                <Feature img={IconSecurity} title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." />
            </section>
        </main>
    );
}

export default Home;