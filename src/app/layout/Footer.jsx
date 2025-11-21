export default function Footer() {
    return (
        <footer className="bg-[#0c0c0c] text-gray-300 pt-10">
            <div className="max-w-7xl mx-auto px-4">

                {/* Ribbon */}
                <div className="mb-10">
                    <div className="inline-block bg-[#007bff] text-white px-4 py-1 rounded font-medium">
                        Get in Touch
                    </div>

                    <marquee className="bg-green-600 text-white py-1 mt-2 rounded text-sm">
                        This site is upgrading (Stay With us).
                    </marquee>
                </div>

                {/* Top Footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">

                    {/* About Us */}
                    <div className="order-4 lg:order-1">
                        <h5 className="text-[15px] mb-3 font-semibold">About Us</h5>

                        <p className="pe-1 mb-4 text-[14px] leading-relaxed">
                            BDTaxation, your trusted source for all the information about income tax in Bangladesh.
                            We're here to be your reliable helper in the matter of BD Income Tax.
                        </p>

                        <h5 className="text-[15px] mb-3 font-semibold">FOLLOW US</h5>

                        <ul className="flex gap-3 text-xl">
                            <li>
                                <a
                                    href="https://www.facebook.com/bdtaxationofficial"
                                    target="_blank"
                                    className="hover:text-white"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.youtube.com/@BDTaxation"
                                    target="_blank"
                                    className="hover:text-white"
                                >
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.linkedin.com/company/bdtaxation/"
                                    target="_blank"
                                    className="hover:text-white"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/bdtaxation/"
                                    target="_blank"
                                    className="hover:text-white"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://x.com/BDTaxation"
                                    target="_blank"
                                    className="hover:text-white"
                                >
                                    <i className="fab fa-x-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div className="order-1">
                        <h5 className="text-[15px] mb-3 font-semibold">Important Links</h5>
                        {/* No items inside — left blank exactly like original */}
                    </div>

                    {/* Quick Links */}
                    <div className="order-2">
                        <h5 className="text-[15px] mb-3 font-semibold">Quick Links</h5>

                        <ul className="space-y-2 text-[14px]">
                            <li>
                                <a href="https://bdtaxation.com/about" className="hover:underline flex items-center">
                                    <i className="fas fa-angle-right text-blue-500"></i>
                                    <span className="ms-2">About Us</span>
                                </a>
                            </li>

                            <li>
                                <a href="https://bdtaxation.com/contact" className="hover:underline flex items-center">
                                    <i className="fas fa-angle-right text-blue-500"></i>
                                    <span className="ms-2">Contact Us</span>
                                </a>
                            </li>

                            <li>
                                <a href="https://bdtaxation.com/terms" className="hover:underline flex items-center">
                                    <i className="fas fa-angle-right text-blue-500"></i>
                                    <span className="ms-2">Terms & Conditions</span>
                                </a>
                            </li>

                            <li>
                                <a href="https://bdtaxation.com/privacy" className="hover:underline flex items-center">
                                    <i className="fas fa-angle-right text-blue-500"></i>
                                    <span className="ms-2">Privacy</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="order-3">
                        <h5 className="text-[15px] mb-3 font-semibold">CONTACT US</h5>

                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-[14px]">
                                <i className="far fa-envelope text-blue-500"></i>
                                <a href="mailto:admin@bdtaxation.com" className="hover:underline">
                                    admin@bdtaxation.com
                                </a>
                            </li>

                            <li className="flex items-center gap-2 text-[14px]">
                                <i className="fas fa-envelope text-blue-500"></i>
                                <a href="mailto:support@bdtaxation.com" className="hover:underline">
                                    support@bdtaxation.com
                                </a>
                            </li>
                        </ul>

                        <div className="flex gap-4 mt-4">
                            <a href="https://play.google.com/store/apps/details?id=com.techyfo.bdtaxation" target="_blank">
                                <img
                                    className="w-[150px]"
                                    src="https://bdtaxation.com/img/play-store-logo.webp"
                                    alt="Play Store"
                                />
                            </a>

                            <a
                                href="https://apps.apple.com/us/app/bd-taxation-income-tax-in-bd/id6670564455?platform=iphone"
                                target="_blank"
                            >
                                <img
                                    className="w-[150px]"
                                    src="https://bdtaxation.com/img/app-store-download.png"
                                    alt="App Store"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="bg-[#111] mt-10 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

                        {/* Logo */}
                        <a href="https://bdtaxation.com" className="opacity-50 hover:opacity-100 transition">
                            <img
                                src="https://bdtaxation.com/uploads/01HW88GE74CZHM6WQVYJ68FZFP.png"
                                alt="BD Taxation"
                                className="w-[100px]"
                            />
                        </a>

                        {/* Copyright */}
                        <p className="text-[14px] text-center">
                            © Copyright 2025. All Rights Reserved.
                            Design and Developed by{" "}
                            <a href="https://techyfo.com" target="_blank" className="text-blue-400 underline">
                                Techyfo
                            </a>
                        </p>

                        {/* Sub Menu */}
                        <ul className="flex gap-6 text-[14px]">
                            <li>
                                <a href="https://bdtaxation.com/faqs" className="hover:underline flex items-center">
                                    <i className="fas fa-angle-right"></i>
                                    <span className="ml-1">FAQ's</span>
                                </a>
                            </li>

                            <li>
                                <a href="https://bdtaxation.com/sitemap.xml" className="hover:underline flex items-center">
                                    <i className="fas fa-angle-right"></i>
                                    <span className="ml-1">Sitemap</span>
                                </a>
                            </li>

                            <li>
                                <a href="https://bdtaxation.com/contact" className="hover:underline flex items-center">
                                    <i className="fas fa-angle-right"></i>
                                    <span className="ml-1">Contact Us</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    );
}
