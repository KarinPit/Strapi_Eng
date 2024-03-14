module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'design.moranws@gmail.com',
                from: 'mnotifier887@gmail.com',
                replyTo: 'mnotifier887@gmail.com',
                subject: 'לקוח חדש פנה אליך',
                html: `${result.name} השאיר/ה לך את הפרטים שלו/ה.<br>${result.phone}<br>${result.email}`,
            });
        } catch (error) {
            console.log(error);
        }
    },
}