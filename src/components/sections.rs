pub fn features_section() -> Html {
    html! {
        <div class="relative flex items-center justify-center antialiased min-h-screen">
            <div class="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                // First card
                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        // Existing content...
                    </div>
                </div>

                // Second card
                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        // Existing content...
                    </div>
                </div>

                // Third card
                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        // Existing content...
                    </div>
                </div>
            </div>
        </div>
    }
}

pub fn pricing_section() -> Html {
    html! {
        <div class="relative flex items-center justify-center antialiased min-h-screen">
            <div class="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                // First pricing card
                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        // Existing pricing content...
                    </div>
                </div>

                // Additional pricing cards follow the same pattern...
            </div>
        </div>
    }
}

pub fn testimonials_section() -> Html {
    html! {
        <div class="relative flex items-center justify-center antialiased min-h-screen">
            <div class="relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                // Testimonial cards
                <div class="relative group">
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        // Existing testimonial content...
                    </div>
                </div>
                // Additional testimonial cards follow the same pattern...
            </div>
        </div>
    }
} 