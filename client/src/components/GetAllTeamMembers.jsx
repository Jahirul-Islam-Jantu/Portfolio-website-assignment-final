import { useEffect, useState } from "react";
import { getAllMembers } from "../apiCalls/apiCalls.js";

const GetAllTeamCard = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch team members on component mount
    useEffect(() => {
        (async () => {
            try {
                const members = await getAllMembers();

                console.log("Fetched Members:", members); // Log fetched members
                if (members) {
                    setTeamMembers(members);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                console.error("Error fetching members:", error);
            }
        })();
    }, []);

    return (
        <section className="pb-10 pt-10 dark:bg-dark lg:pb-20 lg:pt-[50px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                Our Awesome Team
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                {teamMembers.length > 0 ? (
                    <div className="-mx-4 flex flex-wrap justify-center">
                        {teamMembers.map((member, index) => (
                            <TeamCard
                                key={index} // Key should be assigned in the map function
                                name={member.name}
                                profession={member.skills}
                                experience = {member.experience}
                                imageSrc={`http://localhost:3000/file-upload/${member.img}`}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No team members found.</p>
                )}



            < /div>
                    </section>
                    );
                };

                export default GetAllTeamCard;

                const TeamCard = ({ imageSrc, name, profession, experience}) => {
                return (
                <>
                <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                    <div className="relative overflow-hidden rounded-lg">
                        <img src={imageSrc} alt="Image" className="w-full"/>
                        <div className="absolute bottom-5 left-0 w-full text-center">
                            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
                                <h3 className="text-base font-semibold text-dark dark:text-white">
                                    {name}
                                </h3>
                                <p className="text-xs text-body-color dark:text-dark-6">
                                    {profession}
                                </p>
                                <p className="text-xs text-body-color dark:text-dark-6">
                                    {experience}
                                </p>
                                <div>
                  <span className="absolute bottom-0 left-0">
                    <svg
                        width={61}
                        height={30}
                        viewBox="0 0 61 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                          cx={16}
                          cy={45}
                          r={45}
                          fill="#13C296"
                          fillOpacity="0.11"
                      />
                    </svg>
                  </span>
                                    <span className="absolute right-0 top-0">
                    <svg
                        width={20}
                        height={25}
                        viewBox="0 0 20 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                          cx="0.706257"
                          cy="24.3533"
                          r="0.646687"
                          transform="rotate(-90 0.706257 24.3533)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="6.39669"
                          cy="24.3533"
                          r="0.646687"
                          transform="rotate(-90 6.39669 24.3533)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="12.0881"
                          cy="24.3533"
                          r="0.646687"
                          transform="rotate(-90 12.0881 24.3533)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="17.7785"
                          cy="24.3533"
                          r="0.646687"
                          transform="rotate(-90 17.7785 24.3533)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="0.706257"
                          cy="18.6624"
                          r="0.646687"
                          transform="rotate(-90 0.706257 18.6624)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="6.39669"
                          cy="18.6624"
                          r="0.646687"
                          transform="rotate(-90 6.39669 18.6624)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="12.0881"
                          cy="18.6624"
                          r="0.646687"
                          transform="rotate(-90 12.0881 18.6624)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="17.7785"
                          cy="18.6624"
                          r="0.646687"
                          transform="rotate(-90 17.7785 18.6624)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="0.706257"
                          cy="12.9717"
                          r="0.646687"
                          transform="rotate(-90 0.706257 12.9717)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="6.39669"
                          cy="12.9717"
                          r="0.646687"
                          transform="rotate(-90 6.39669 12.9717)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="12.0881"
                          cy="12.9717"
                          r="0.646687"
                          transform="rotate(-90 12.0881 12.9717)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="17.7785"
                          cy="12.9717"
                          r="0.646687"
                          transform="rotate(-90 17.7785 12.9717)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="0.706257"
                          cy="7.28077"
                          r="0.646687"
                          transform="rotate(-90 0.706257 7.28077)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="6.39669"
                          cy="7.28077"
                          r="0.646687"
                          transform="rotate(-90 6.39669 7.28077)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="12.0881"
                          cy="7.28077"
                          r="0.646687"
                          transform="rotate(-90 12.0881 7.28077)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="17.7785"
                          cy="7.28077"
                          r="0.646687"
                          transform="rotate(-90 17.7785 7.28077)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="0.706257"
                          cy="1.58989"
                          r="0.646687"
                          transform="rotate(-90 0.706257 1.58989)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="6.39669"
                          cy="1.58989"
                          r="0.646687"
                          transform="rotate(-90 6.39669 1.58989)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="12.0881"
                          cy="1.58989"
                          r="0.646687"
                          transform="rotate(-90 12.0881 1.58989)"
                          fill="#3056D3"
                      />
                      <circle
                          cx="17.7785"
                          cy="1.58989"
                          r="0.646687"
                          transform="rotate(-90 17.7785 1.58989)"
                          fill="#3056D3"
                      />
                    </svg>
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
