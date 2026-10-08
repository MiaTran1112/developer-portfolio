// @flow strict

import * as React from 'react';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
  const projectUrl = project.code || project.demo;

  return (
    <div className="from-[#ffeff7] border-[#f7c6d9] relative rounded-lg border bg-gradient-to-r to-[#fff7fb] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-rose-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-rose-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative flex items-center gap-4">
        <div className="flex shrink-0 flex-row space-x-1 lg:space-x-2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-rose-300"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-pink-200"></div>
        </div>
        <p className="text-center flex-1 text-[#a52b65] text-base lg:text-xl">
          {projectUrl ? (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              {project.name}
            </a>
          ) : project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-[#f7c6d9] px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-[#a52b65]">const</span>
            <span className="mr-2 text-[#542b42]">project</span>
            <span className="mr-2 text-[#a52b65]">=</span>
            <span className="text-[#806575]">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#542b42]">name:</span>
            <span className="text-[#806575]">{`'`}</span>
            <span className="text-[#984c70]">{project.name}</span>
            <span className="text-[#806575]">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-[#542b42]">tools:</span>
            <span className="text-[#806575]">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-[#984c70]">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-[#806575]">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-[#806575]">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-[#542b42]">myRole:</span>
            <span className="text-[#a52b65]">{project.role}</span>
            <span className="text-[#806575]">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-[#542b42]">Description:</span>
            <span className="text-[#75496f]">{' ' + project.description}</span>
            <span className="text-[#806575]">,</span>
          </div>
          <div><span className="text-[#806575]">{`};`}</span></div>
        </code>
        {projectUrl && (
          <div className="mt-6">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
              className="inline-flex items-center gap-2 rounded-lg border border-[#a52b65] px-4 py-2 text-sm font-medium text-[#a52b65] transition-colors hover:bg-[#a52b65] hover:text-[#ffeff7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <FaGithub aria-hidden="true" />
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
