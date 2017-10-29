
Inspiration

My team members and me had different experiences when we had to undergo medical procedures at Chicago. The whole process from admission to discharge was seamless. However, the real drama unfolded when we started to receive the bills. We were not only billed by the hospital and the insurance company but also from the physician who treated us. This caused a lot of confusion of how much was paid or how much we owed to the hospital, a stack of bills all detailing the same medical condition treated but billed in various ways. The experience resulted in the inception of the idea to create a single platform that could show a user his expenses in an easy comprehensible manner.


What it does

a. Compare and buy the best health insurance plan suited to your needs, enter in your requirements and we provide a summary view of the insurance amounts the details of which is provided through the hyperlinks for each company.

b. Most distinct feature is Read ebills either on the body of the email or pdf receipts from the users mailbox. Using the treatment billing information and creating a dashboard that would display total medical expenses highlighting how much the patient owes and how that translates into percentage of deductibles + insurance money paid.

c. We also provide easy access to epayments, set reminders for payments and keep log of any payment activities processed through the portal.

d. An additional feature is book a specialist specifying your illness. This feature would highlight the doctors or specialists who are partnered with Med-ex. Providing reviews and rating prior to booking an appointment.


How we built it

Email/ image scraping using Context.io API to access clients emails. With the consent of the user and applying billing keywords the emails are drawn from the users personal mailbox. Keeping in mind HIPAA rules and abiding by it we do not share personal identifiable data to a third party, our process would only entail easing the process for the end users by displaying information on the users personal dashboard. The dashboard is built using angular js and the emails that include ebills at the attachment are parsed and the data comprising of Medical procedural costs, Insurance coverage, Deductible paid, Amount paid by self and finally the balance is shown on the dashboard. For the event, we created a prototype using proto.io and combined all our ideas and created a video to show the initial UI of the app.


What's next for Med-Ex

Implementing the other modules and creating a working fully functional web app and further extending it to mobile.
