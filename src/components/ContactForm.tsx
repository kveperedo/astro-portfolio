import { FormEvent, useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'submitted' | 'error';

const FORMSPREE_URL = 'https://formspree.io/f/xgeblkwb';

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!event.target) {
            return;
        }

        try {
            setFormStatus('submitting');
            const response: Response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                body: new FormData(event.target as HTMLFormElement),
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            if (response.ok) {
                setFormStatus('submitted');
            } else {
                throw new Error(data.error);
            }

            setFormStatus('submitted');
        } catch (error) {
            console.error(error);
            setFormStatus('error');
        }
    };

    if (formStatus === 'submitted') {
        return (
            <h1 className="text-2xl text-neutral-100">
                Thank you for submitting!
            </h1>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4 md:w-[512px]">
            <h1 className="mb-10 mr-auto text-4xl">Contact</h1>

            <label className="text-neutral-200">
                Name
                <input
                    required
                    className="mt-2 flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-900/40 py-2 px-3 tracking-wider backdrop-blur transition-colors placeholder:text-neutral-400 hover:border-neutral-500 focus-visible:border-neutral-300 focus-visible:outline-none"
                    type="text"
                    name="name"
                />
            </label>
            <label className="text-neutral-200">
                Email
                <input
                    required
                    className="mt-2 flex h-10 w-full rounded-md border border-neutral-800 bg-neutral-900/40 py-2 px-3 tracking-wider backdrop-blur transition-colors placeholder:text-neutral-400 hover:border-neutral-500 focus-visible:border-neutral-300 focus-visible:outline-none"
                    type="email"
                    name="email"
                />
            </label>
            <label className="text-neutral-200">
                Message
                <textarea
                    required
                    className="mt-2 mb-5 flex h-52 w-full resize-none rounded-md border border-neutral-800 bg-neutral-900/40 py-2 px-3 tracking-wider backdrop-blur transition-colors placeholder:text-slate-400 hover:border-neutral-500 focus-visible:border-neutral-300 focus-visible:outline-none"
                    name="message"></textarea>
            </label>

            {formStatus === 'error' && (
                <span className="text-neutral-100">
                    An error has occured. Please try submitting again.
                </span>
            )}

            <button
                disabled={formStatus === 'submitting'}
                type="submit"
                className="mt-5 rounded bg-pink-700 py-4 px-10 font-serif font-medium tracking-wider text-white shadow-[0_0_12px_rgba(255,47,47,0.5)] transition-all duration-500 enabled:hover:bg-pink-800 enabled:hover:shadow-pink-700 disabled:opacity-50 ">
                {formStatus === 'submitting' ? 'Sending...' : 'Send message'}
            </button>
        </form>
    );
};

export default ContactForm;
