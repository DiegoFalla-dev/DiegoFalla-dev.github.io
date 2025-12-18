import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  async function onSubmit(data: FormValues) {
    // Simulate sending; replace with real API call if needed
    await new Promise((r) => setTimeout(r, 700));
    console.log("Contact form submit:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-4">Contact</h2>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-slate-100">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full rounded-md border border-brand-mid/12 bg-brand-dark/10 text-slate-100 shadow-sm p-2"
            placeholder="Your name"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-100">Email</label>
          <input
            {...register("email", { required: "Email required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })}
            className="mt-1 block w-full rounded-md border border-brand-mid/12 bg-brand-dark/10 text-slate-100 shadow-sm p-2"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-100">Message</label>
          <textarea
            {...register("message", { required: "Message required" })}
            className="mt-1 block w-full rounded-md border border-brand-mid/12 bg-brand-dark/10 text-slate-100 shadow-sm p-2 h-28"
            placeholder="Tell me about your project"
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-brand-primary text-black rounded-md hover:brightness-90 disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>
          {sent && <span className="text-sm text-green-500">Message sent — gracias!</span>}
        </div>
      </motion.form>
    </section>
  );
}
