/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1721736695", {
    template: `
    <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <div class="flex">
                    <div class="flex-1 w-64 bg-gray-100 dark:bg-gray-700 p-4">
                        <nav>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
                                <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
                                <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="flex-1">
                        <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                        <div id="footer-content" class="text-center">
                            <div class="flex">
                                <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                                    <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                                    EtherScan - Ethereum Transaction Explorer
                                </a>
                            </div>
                        </div>
                        <div class="flex">
                            <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                                Stay up-to-date with the latest Ethereum transactions. EtherScan provides real-time tracking of new transactions on the Ethereum blockchain.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
