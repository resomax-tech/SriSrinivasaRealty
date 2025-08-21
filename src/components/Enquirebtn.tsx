import React from "react";
import { Phone } from "lucide-react";

const EnquireButton = () => {

    return (
        <button
            onClick={() => window.open('tel:+7729922244')}

            className="fixed -right-12 bottom-40  
             btn-fixed-custom shadow-lg flex items-center space-x-2
             px-2 py-1 text-xs rounded-full
             -rotate-90 md:hidden"
        >
            <Phone className="h-3 w-3 md:h-4 md:w-4" />
            <span>Enquire Now</span>
        </button>

    );
};

export default EnquireButton;
