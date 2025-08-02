"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const testimonials = [
	{
		text: "Advance Biotech has been our trusted pharmaceutical supplier for over 3 years. Their quality assurance and timely delivery have never disappointed us.",
		image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
		name: "Dr. Sarah Ahmed",
		role: "Chief Medical Officer, Islamabad General Hospital",
	},
	{
		text: "The reliability and professionalism of Advance Biotech is unmatched. They understand our urgent pharmaceutical needs and always deliver on time.",
		image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
		name: "Muhammad Hassan",
		role: "Pharmacy Manager, HealthCare Plus",
	},
	{
		text: "Working with Mudassar and his team has been exceptional. Their commitment to quality and customer service sets them apart in the pharmaceutical industry.",
		image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
		name: "Dr. Fatima Khan",
		role: "Director, Karachi Medical Center",
	},
	{
		text: "Advance Biotech's comprehensive pharmaceutical supply solutions have streamlined our operations. Their expertise in healthcare logistics is remarkable.",
		image: "https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
		name: "Ahmed Ali",
		role: "Operations Manager, MediCare Clinic",
	},
	{
		text: "The quality of medicines and medical equipment supplied by Advance Biotech consistently meets international standards. Highly recommended!",
		image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
		name: "Dr. Ayesha Malik",
		role: "Head Pharmacist, Lahore Medical Complex",
	},
	{
		text: "Their 24/7 support and emergency delivery services have been crucial for our hospital operations. Advance Biotech truly cares about patient welfare.",
		image: "https://images.pexels.com/photos/5327532/pexels-photo-5327532.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
		name: "Dr. Omar Raza",
		role: "Medical Director, City Hospital",
	},
	{
		text: "Since partnering with Advance Biotech, our pharmaceutical procurement has become more efficient and cost-effective. Excellent service quality!",
		image: "https://images.pexels.com/photos/5327540/pexels-photo-5327540.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
		name: "Zainab Hussain",
		role: "Procurement Manager, National Health Services",
	},
	{
		text: "The team at Advance Biotech understands the critical nature of pharmaceutical supply. Their dedication to healthcare excellence is commendable.",
		image: "https://images.pexels.com/photos/5327574/pexels-photo-5327574.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
		name: "Dr. Farhan Siddiqui",
		role: "Chief Executive, Regional Medical Authority",
	},
	{
		text: "Advance Biotech has consistently provided us with genuine, quality-assured pharmaceutical products. Their regulatory compliance is exemplary.",
		image: "https://images.pexels.com/photos/5327539/pexels-photo-5327539.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
		name: "Sana Sheikh",
		role: "Quality Assurance Manager, PharmaCorp",
	},
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
	return (
		<section className="bg-gradient-to-br from-purple-50 to-green-50 py-20 relative">
			{/* Add decorative elements with purple/green theme */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true }}
					className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
				>
					<div className="flex justify-center">
						<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 py-2 px-6">
							Testimonials
						</Badge>
					</div>

					<h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4 text-center">
						What Our Healthcare Partners Say
					</h2>
					<p className="text-lg text-gray-600 text-center max-w-2xl">
						Trusted by healthcare professionals across Pakistan for quality
						pharmaceutical supply.
					</p>

					{/* Add decorative line with gradient */}
					<div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-green-600 mt-4 rounded-full"></div>
				</motion.div>

				<div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
					<TestimonialsColumn testimonials={firstColumn} duration={15} />
					<TestimonialsColumn
						testimonials={secondColumn}
						className="hidden md:block"
						duration={19}
					/>
					<TestimonialsColumn
						testimonials={thirdColumn}
						className="hidden lg:block"
						duration={17}
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;