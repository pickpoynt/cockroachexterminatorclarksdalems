import { ShieldCheck, Target, Hammer, Search, AlertTriangle, HelpCircle } from "lucide-react";

const SquirrelControlInfo = () => {
    const faqs = [
        { q: "Does pest control get rid of squirrels?", a: "Yes, professional pest control services specialize in humane squirrel removal, exclusion, and repair of any damage they've caused to your home." },
        { q: "How to get rid of squirrels in Florida?", a: "In Florida, it's essential to identify entry points, use humane traps if necessary, and implement exclusion techniques like steel mesh and professional-grade sealants." },
        { q: "How much does it cost to get rid of squirrels?", a: "The cost vary based on the severity of the infestation and the amount of repairs needed, typically ranging from $300 to $1,500 for professional services." },
        { q: "What is the best pest control for squirrels?", a: "The best approach is 'Exclusion'—identifying every hole, sealing them with bite-proof materials, and using one-way doors to let squirrels out but not back in." },
        { q: "How do I get rid of squirrels permanently?", a: "Permanent removal requires professional exclusion work. Sealing all entry points with hardware cloth and metal flashing is the only way to ensure they don't return." },
        { q: "What is the number one killer of squirrels?", a: "In the wild, predators like hawks, owls, and foxes are the primary natural threats, but in urban areas, vehicles and habitat loss are major factors." },
        { q: "How to stop squirrels in a house?", a: "Stop squirrels by trimming tree branches 6-10 feet away from your roof, installing chimney caps, and sealing all gaps in soffits and fascia boards." },
        { q: "What is the 5 7 9 rule for squirrels?", a: "The 5-7-9 rule refers to the distance squirrels can jump: 5 feet up, 7 feet across, and 9 feet down. Use this to guide where you trim trees back from your home." },
        { q: "What smell do squirrels hate the most?", a: "Squirrels have a strong sense of smell and generally dislike the scent of peppermint, cayenne pepper, vinegar, and predator urine (like fox or coyote)." },
        { q: "How do professionals remove squirrels?", a: "Professionals use a combination of trapping, one-way exit doors, and structural exclusion to safely remove squirrels and prevent their reentry." },
        { q: "Will a squirrel come back if you remove it?", a: "Yes, squirrels are highly territorial. If you don't seal their entry points, they (or others) will likely return to the same spot." },
        { q: "How to get rid of a squirrel at home?", a: "At home, start by identifying the entry point. Use a one-way door to let it out, then immediately seal the hole with galvanized steel mesh." },
        { q: "What to spray to keep squirrels away?", a: "Repellent sprays containing capsaicin (hot pepper), peppermint oil, or predator urine can be effective temporary deterrents for gardens and bird feeders." },
        { q: "How to get rid of gray squirrels?", a: "Gray squirrels are best handled through professional trapping and exclusion. Removal of attractants like bird feeders can also help reduce their presence." },
        { q: "What does vinegar do to squirrels?", a: "The strong acetic acid in vinegar is unpleasant to squirrels' sensitive noses. Spraying it around potential entry points can act as a mild deterrent." },
        { q: "How to get a squirrel to leave?", a: "Encourage a squirrel to leave by using bright lights, loud noises (radio), or one-way exclusion devices that allow exit but block reentry." },
        { q: "What is toxic to squirrels?", a: "Many common items are toxic to squirrels, including chocolate, caffeine, and certain garden plants. However, poisoning is not a recommended or humane method of control." },
        { q: "How to remove squirrels from a house naturally?", a: "Natural removal involves using deterrents like strobe lights or peppermint oil followed by mechanical exclusion (sealing holes) once they've left." },
        { q: "How to keep squirrels away from a house?", a: "Keep squirrels away by securing trash lids, removing bird feeders, and ensuring there are no overhanging branches within 10 feet of your roofline." },
        { q: "How does pest control get rid of squirrels?", a: "Pest control experts use specialized equipment to trap and relocate squirrels or install one-way valves that allow them to leave the attic safely." },
        { q: "Does an exterminator get rid of squirrels?", a: "Most modern 'exterminators' focus on humane wildlife management for squirrels rather than elimination, emphasizing removal and exclusion." },
        { q: "What animals get rid of squirrels?", a: "Natural predators like hawks, owls, snakes, and even domestic cats or dogs can help keep squirrel populations in check around a property." },
        { q: "What smells do squirrels absolutely hate?", a: "Squirrels strongly dislike the smell of garlic, onions, black pepper, and peppermint oil. These can be used in gardens to protect plants." },
        { q: "Do squirrels come back to the same place?", a: "Yes, squirrels leave pheromone trails and 'scent markers' that lead them and other squirrels back to successful nesting sites year after year." },
        { q: "Can I use poison to remove squirrels?", a: "Using poison for squirrels is highly discouraged as it can lead to dead animals in walls (causing odor issues) and can harm non-target wildlife or pets." }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="faq">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mb-16 text-center mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-widest border border-amber-100 mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Expert Knowledge Base</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
                        Fruitland Squirrel Control <br />
                        <span className="text-amber-600">Common Questions</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-amber-200 transition-all group hover:shadow-2xl hover:shadow-amber-900/5">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors shadow-sm">
                                    <HelpCircle className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium italic">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 border-t border-slate-100">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                        <img src="/1.jpeg" alt="Squirrel Inspection" className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                                <p className="text-white font-bold italic text-xl leading-relaxed">
                                    "Proper exclusion is the only permanent solution to squirrel infestations. We don't just remove the problem; we ensure it doesn't come back."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Precision Trapping</h3>
                                <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest font-bold">Safe, humane, and effective removal techniques tailored for MD homes.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-amber-600 text-white shadow-xl shadow-amber-600/30 hover:shadow-2xl transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                                    <ShieldCheck className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Entry Exclusion</h3>
                                <p className="text-white/90 text-sm leading-relaxed uppercase tracking-widest font-bold">We bridge the gap between your home and local wildlife by sealing every entry point.</p>
                            </div>
                        </div>

                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-amber-500/10">
                            <img src="/3.jpeg" alt="Squirrel Control Service" className="w-full object-cover aspect-video transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-6 right-6 px-6 py-2 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest animate-pulse border border-white/20 shadow-lg">
                                Fruitland Specialist
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SquirrelControlInfo;
