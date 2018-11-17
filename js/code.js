function add_notification(notification_obj) {
    var current_notifs = get_notifications();
    current_notifs.push(notification_obj);
    set_notifications(current_notifs);
}

function set_notifications(notifs_blob) {
    localStorage.setItem('myYukonNotifications', JSON.stringify(notifs_blob));
}

function get_notifications() {
    var notificationsText = localStorage.getItem('myYukonNotifications');
    var notifs;
    if (!notificationsText) {
        notifs = [];
    } else {
        notifs = JSON.parse(notificationsText);
    }
    return notifs;
}

function add_form(form_obj) {
    var current_forms = get_forms();

    for (formIndex in savedForms) {
        if (savedForms[formIndex].page_title == form_obj.page_title) {
            return;
        }
    }

    current_forms.push(form_obj);

    localStorage.setItem('myYukonForms', JSON.stringify(current_forms));
}

function clear_forms() {
    localStorage.setItem('myYukonForms', '[]');
    localStorage.setItem('iAm', 'Nobody');
}

function setup_angela() {
    var iAm = localStorage.getItem('iAm');
    if (iAm == 'angela') {
        return;
    }
    localStorage.setItem('formHeadings', JSON.stringify(['Home', 'Business', 'Education']));
    clear_forms();
    add_form({
        'href': '/images/fuelpermit.pdf',
        'page_title': 'Firewood Permit',
    })
    add_form({
        'href': '#',
        'page_title': "Homeowners' Grant"
    })
    add_form({
        'href': '#',
        'page_title': 'Home Business Application'
    })
    add_form({
        'href': '#',
        'page_title': 'Taxidermy Practitioner Application'
    })
    add_form({
        'href': '#',
        'page_title': 'Renew Business Name'
    })
    add_form({
        'href': '#',
        'page_title': 'Business License Application'
    })
    localStorage.setItem('iAm', 'angela');
}

function setup_jacob() {
    var iAm = localStorage.getItem('iAm')
    if (iAm == 'jacob') {
        return;
    }
    localStorage.setItem('formHeadings', JSON.stringify(['Outdoor Recreation', 'Business', 'Education']));
    clear_forms();
    add_form({
        'href': '#',
        'page_title': 'Hunting Licence - 2018'
    })
    add_form({
        'href': '#',
        'page_title': 'Camping Permit'
    })
    add_form({
        'href': '#',
        'page_title': 'Fishing License'
    })
    add_form({
        'href': '#',
        'page_title': 'Business Registration'
    })
    add_form({
        'href': '#',
        'page_title': 'Enterprise Trade Fund Application'
    })
    localStorage.setItem('iAm','jacob');
}

function get_forms() {
     savedFormsText = localStorage.getItem('myYukonForms');
    if (!savedFormsText) {
        savedForms = [];
    } else {
        savedForms = JSON.parse(savedFormsText)

    }
    return savedForms;
}

function add_dummy_notifications(){
    add_notification({
        text: "You should register for school",
        form: "http://www.gov.yk.ca/forms/forms/5000/yg5447_e.pdf",
        formname: "Registering for school"
    });
}

function add_notification_form(form_href) {
    var notifs = get_notifications();
    for (notif_idx in notifs) {
        if (notifs[notif_idx].form == form_href) {
            add_form({
                'href': notifs[notif_idx].form,
                'page_title': notifs[notif_idx].formname
            })
            dismiss_notification(form_href);
            window.location = '/my-forms/'
            return;
        }
    }
}

function dismiss_notification(form_href) {
    var notifs = get_notifications();
    var new_notifs = [];
    for (notif_idx in notifs) {
        if (notifs[notif_idx].form != form_href) {
            new_notifs.push(notifs[notif_idx]);
        }
    }
    set_notifications(new_notifs);
    draw_notifications();
}