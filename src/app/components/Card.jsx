// components/PricingPlans.jsx
const plans = [
    {
        name: 'bronze',
        desc: 'the starter plan',
        cost: 12.99,
        feat: {
            users: 2,
            'gb disk space': 5,
            'email support': false,
            '24/7 tech support': false,
        },
        cols: ['#fddb6d', '#fecf3b', '#f9ae39', '#e5983c', '#cb8639'],
    },
    {
        name: 'silver',
        desc: 'the standard plan',
        cost: 15.99,
        feat: {
            users: 5,
            'gb disk space': 10,
            'email support': true,
            '24/7 tech support': false,
        },
        cols: ['#d3db25', '#bcd231', '#71b045', '#6da542', '#608e36'],
    },
    {
        name: 'gold',
        desc: 'the extended plan',
        cost: 17.99,
        feat: {
            users: 10,
            'gb disk space': 100,
            'email support': true,
            '24/7 tech support': true,
        },
        cols: ['#4bc5da', '#36adc5', '#2f99b3', '#298ca3', '#247f94'],
    },
];

export default function PricingPlans() {
    return (
        <div className="flex flex-wrap justify-center gap-8 p-8 bg-gray-100 min-h-screen">
            {plans.map((plan, idx) => (
                <article
                    key={idx}
                    className="relative w-72 rounded-xl overflow-hidden border-8"
                    style={{
                        borderColor: plan.cols[0],
                        background: `linear-gradient(135deg, ${plan.cols[1]} 32%, ${plan.cols[2]} 57%, ${plan.cols[3]} 100%)`,
                    }}
                >
                    <header className="text-center p-6">
                        <h3 className="text-2xl font-bold text-white capitalize">{plan.name}</h3>
                        <p className="text-sm text-white mt-1">{plan.desc}</p>
                        <p className="text-xl font-semibold text-white mt-2">${plan.cost}/month</p>
                    </header>

                    <section className="p-6 bg-white">
                        <ul className="space-y-2">
                            {Object.entries(plan.feat).map(([key, val], i) => {
                                const isBool = typeof val === 'boolean';
                                return (
                                    <li
                                        key={i}
                                        className={`${isBool && !val ? 'line-through opacity-50' : ''
                                            } flex justify-between`}
                                    >
                                        <span>{isBool ? key : val}</span>
                                        {!isBool && <span className="text-gray-500">{key}</span>}
                                    </li>
                                );
                            })}
                        </ul>
                    </section>

                    <footer className="text-center p-4 bg-white">
                        <button
                            className="mt-4 px-6 py-2 rounded-lg font-semibold text-white"
                            style={{
                                background: `linear-gradient(135deg, ${plan.cols[0]}, ${plan.cols[1]}, ${plan.cols[2]})`,
                            }}
                        >
                            View Plans & Prices
                        </button>
                    </footer>
                </article>
            ))}
        </div>
    );
}
