import {EXPERIENCES} from "../constants"

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Experience</h2>
        <div>
           {EXPERIENCES.map((experience,index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-start">
                <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400 pt-5">{experience.year}</p>
                </div>
                <div className="w-full lg:w-3/4 bg-white/10 p-10 rounded-md">
                    <h6 className="mb-5 font-medium">
                        {experience.role} - <span className="text-sm font-thin text-white uppercase">{experience.company}</span>
                    </h6>
                    {experience.tasks && ( <ul> {experience.tasks.map((task, taskIndex) => ( <li className="list-disc my-2 pl-2" key={taskIndex}>{task}</li> ))} </ul> )}
                </div>
            </div>
           ))} 
        </div>
    </div>
  )
}

export default Experience