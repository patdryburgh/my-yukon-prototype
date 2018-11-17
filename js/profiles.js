$(document).ready(function(){
    console.log("Loading Profiles file");

    var profiles = [
        {
            "id": 1,
            "email": "angela.fuller@gmail.com",
            "firstName": "Angela",
            "lastName": "Fuller",
            "phone": "867-334-0456",
            "street": "50 Fireweed Drive",
            "street2": "",
            "postalCode": "Y1A 5T8",
            "city": "Whitehorse",
            "province": "Yukon",
            "dateOfBirth": "Feb 24th 1982",
            "ygInfo": [
                {
                    "name": "Health Care",
                    "number": "475-6778-2345",
                    "expiry": ""
                },
                {
                    "name": "Drivers License",
                    "number": "446-2235",
                    "expiry": "24/02/2019"
                }
            ],
            "licenses": [
                {
                    "name": "Hunting License 2019-20",
                    "number": "4456-234",
                    "expiry": ""
                },
                {
                    "name": "Fishing License 2019-20",
                    "number": "06671",
                    "expiry": ""
                }
            ],
            "vehicles": [
                {
                    "name": "Subaru Outback 2005",
                    "expiry": "2019-07-31"
                },
                {
                    "name": "Toyota Tacoma 2010",
                    "expiry": "2018-12-31"
                }
            ],
            "property": [
                {
                    "name": "50 Fireweed Drive, Whitehorse",
                },
                {
                    "name": "72 Lewes Boulevard, Whitehorse",
                }
            ]
        },
        {
            "id": 2,
            "email": "jacob.howard@gmail.com",
            "firstName": "Jacob",
            "lastName": "Howard",
            "phone": "867-332-3487",
            "street": "23 Main Street",
            "street2": "",
            "postalCode": "Y1A 3H6",
            "city": "Whitehorse",
            "province": "Yukon",
            "dateOfBirth": "Jun 12th 1974",
            "ygInfo": [
                {
                    "name": "Health Care",
                    "number": "475-6778-2345",
                    "expiry": ""
                },
                {
                    "name": "Drivers License",
                    "number": "446-2235",
                    "expiry": "24/02/2019"
                }
            ],
            "licenses": [
                {
                    "name": "Hunting License 2019-20",
                    "number": "4456-234",
                    "expiry": ""
                },
                {
                    "name": "Fishing License 2019-20",
                    "number": "06671",
                    "expiry": ""
                }
            ],
            "vehicles": [
                {
                    "name": "Subaru Outback 2005",
                    "expiry": "2019-07-31"
                },
                {
                    "name": "Toyota Tacoma 2010",
                    "expiry": "2018-12-31"
                }
            ],
            "property": [
                {
                    "name": "50 Fireweed Drive, Whitehorse",
                },
                {
                    "name": "72 Lewes Boulevard, Whitehorse",
                }
            ]
        }
    ]

    console.log(profiles);
});