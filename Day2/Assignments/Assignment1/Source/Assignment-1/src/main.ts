import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

import { JobVacancyManager } from "./system/JobVacancyManager";

const jobVacancyManager = new JobVacancyManager();

jobVacancyManager.createVacancy({
  title: "Software Engineer",
  description: "Develop software applications",
  location: "New York",
  salary: 100000,
  datePosted: new Date(),
});

jobVacancyManager.createApplicant({
  id: 1,
  name: "kailesh kher ",
  email: "kailash.kher@example.com",
  phone: "123-456-7890",
  appliedDate: new Date(),
  status: "applied",
});

jobVacancyManager.scheduleInterview(1, {
  date: new Date(),
  location: "New York",
  interviewer: "Pritam ",
});

jobVacancyManager.recordInterviewResult(1, "pass");

const applicants = jobVacancyManager.getApplicants();
console.log(applicants);
console.log(jobVacancyManager);
