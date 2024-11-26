import { TextArea } from './TextArea';
import { Button } from './Button';

export function ContactForm() {
    return (
        <div className="w-full max-w-xl mx-auto space-y-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-start text-sm font-medium text-gray-200 mb-2"
                           htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="none"
                        required
                        className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-transparent focus:outline-none focus:ring-2"
                    />
                </div>

                <div>
                    <label className="block text-start text-sm font-medium text-gray-200 mb-2"
                           htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="none"
                        required
                        className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-transparent focus:outline-none focus:ring-2 "
                    />
                </div>
            </div>

            <div>
                <label className="block text-start text-sm font-medium text-gray-200 mb-2"
                       htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="none"
                    required
                    className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-transparent focus:outline-none focus:ring-2  "
                />
            </div>

            <TextArea
                label="How can we help you?"
                name="message"
                required
                className="text-white"
            />
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    required
                    className="h-4 w-4 text-blue-500 border-gray-700 rounded focus:ring-blue-500 focus:outline-none"
                />
                <label htmlFor="agree" className="text-sm text-gray-200">
                    By selecting this, you agree to our <a href="/privacy-policy"
                                                           className="text-blue-500 font-bold">privacy
                    policy</a>.
                </label>
            </div>


            <div>
                <Button type="submit">Submit</Button>
            </div>
        </div>
    );
}
