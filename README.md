"# verify_email_afs"
If you want to run this code in your computer:
step 1: Install all the dependencies mentioned in package.json file.
step 2: replace the email address in app.js with your own email,which must have two step verification on (For gmail accounts) and create an app password for nodemailer (in the google account security section).
{Manage Your Google Account --> Security --> Two Step Verification --> at the below side of that page,click on App Passwords and generate password for nodemailer.}
step 3: create an .env file in this project and write "PASS= Your APP Password " (without Quotation Marks)