import React from 'react';
import { ThumbsUp, Award, Clock, PhoneCall } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Constants from '../lib/Constants';

const iconMap = {
    ThumbsUp: <ThumbsUp className="mx-auto mb-4 h-12 w-12 text-light-600 dark:text-dark-i400" />,
    Award: <Award className="mx-auto mb-4 h-12 w-12 text-light-600 dark:text-dark-i400" />,
    Clock: <Clock className="mx-auto mb-4 h-12 w-12 text-light-600 dark:text-dark-i400" />,
    PhoneCall: <PhoneCall className="mx-auto mb-4 h-12 w-12 text-light-600 dark:text-dark-i400" />
};

const CardCollection = ({cardsPerRow, cardAlign, cardGap, cardTitleSize, cardTitleBold, cards }) => {
    //const gridClassName = `grid ${Constants.gridMap[cardsPerRow]} ${Constants.gapMap[cardGap]}`;
    const gridClassName = `grid grid-cols-1 sm:grid-cols-2 md:${Constants.gridMap[cardsPerRow]} ${Constants.gapMap[cardGap]}`;

    return (
        <div className={gridClassName}>
            {cards.map(({ icon, title, description }) => (
                <Card className={`card-hover ${Constants.alignMap[cardAlign]} dark:bg-dark-800"`} key={title}>
                    <CardContent className="p-6">
                        {iconMap[icon] || null}
                        <h3 className={`${Constants.sizeMap[cardTitleSize]} text-light-textr-600 ${cardTitleBold ? Constants.boldMap[cardTitleBold] : Constants.boldMap[1]} mb-2 dark:text-dark-white`}>{title}</h3>
                        <p className="dark:text-dark-300">{description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default CardCollection;
