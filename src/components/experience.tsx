import { Spotlight } from "@/components/spotlight";
import { experience, type ExperienceId } from "@/content/site";
import type { Dictionary } from "@/locales";

type Copy = Dictionary["experience"]["items"][ExperienceId];

function Job({ logo, copy }: { logo: string; copy: Copy }) {
  const single = copy.roles.length === 1;

  return (
    <li className="job">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="job-logo" src={logo} alt="" />
      <div className="job-copy">
        <h3 className="company">{copy.company}</h3>
        {single ? (
          <p className="role-title">{copy.roles[0].title}</p>
        ) : (
          <ol className="promo">
            {copy.roles.map((role) => (
              <li key={role.title}>
                <span className="promo-rail" aria-hidden="true">
                  <i />
                </span>
                <span className="promo-title">{role.title}</span>
                <span className="promo-when">{role.period}</span>
              </li>
            ))}
          </ol>
        )}
        <p className="period">
          {single ? (
            <>
              {copy.roles[0].period}
              <span aria-hidden="true"> · </span>
            </>
          ) : null}
          {copy.meta}
        </p>
        {copy.summary ? <p className="summary">{copy.summary}</p> : null}
      </div>
    </li>
  );
}

const listed = new Set(["playablex", "voyager", "sevenapps", "hungri"]);

export function Experience({ t }: { t: Dictionary }) {
  const jobs = experience.filter((job) => listed.has(job.id));

  return (
    <section className="experience" aria-labelledby="experience-heading">
      <Spotlight className="panel experience-panel">
        <p className="eyebrow" id="experience-heading">
          {t.experience.heading}
        </p>
        <ol className="jobs">
          {jobs.map((job) => (
            <Job key={job.id} logo={job.logo} copy={t.experience.items[job.id]} />
          ))}
        </ol>
      </Spotlight>
    </section>
  );
}
