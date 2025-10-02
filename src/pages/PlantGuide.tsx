import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';
import axios from 'axios'; // <-- ADD THIS


// 1. Define specific types for your data to prevent implicit 'any' errors.
type SeasonKey = 'spring' | 'summer' | 'monsoon' | 'winter';

type SeasonData = {
  name: string;
  months: string;
  color: string;
  plants: string[];
  activities: string[];
};

type Seasons = Record<SeasonKey, SeasonData>;

type Region = {
  name: string;
  climate: string;
  plants: string[];
  characteristics: string[];
};

type GrowingTip = {
  title: string;
  description: string;
  tips: string[];
};

const PlantGuide = () => {
  // 2. Explicitly type the state hook to only allow valid season keys.
  const [selectedSeason, setSelectedSeason] = useState<SeasonKey>('spring');

  const seasons: Seasons = {
    spring: {
      name: 'Spring',
      months: 'March - May',
      color: 'bg-green-500',
      plants: ['Tulsi', 'Brahmi', 'Peppermint', 'Chamomile'],
      activities: ['Planting new herbs', 'Transplanting seedlings', 'Soil preparation']
    },
    summer: {
      name: 'Summer',
      months: 'June - August',
      color: 'bg-yellow-500',
      plants: ['Aloe Vera', 'Turmeric', 'Ginger', 'Neem'],
      activities: ['Regular watering', 'Harvesting mature herbs', 'Pest management']
    },
    monsoon: {
      name: 'Monsoon',
      months: 'September - November',
      color: 'bg-blue-500',
      plants: ['Ashwagandha', 'Amla', 'Licorice', 'Fennel'],
      activities: ['Disease prevention', 'Drainage management', 'Root harvesting']
    },
    winter: {
      name: 'Winter',
      months: 'December - February',
      color: 'bg-purple-500',
      plants: ['Cinnamon', 'Cardamom', 'Fenugreek', 'Sage'],
      activities: ['Plant protection', 'Seed collection', 'Planning next season']
    }
  };

  const regions: Region[] = [
    {
      name: 'Tropical',
      climate: 'Hot and humid year-round',
      plants: ['Turmeric', 'Ginger', 'Neem', 'Tulsi'],
      characteristics: ['High temperature', 'High humidity', 'Monsoon rains']
    },
    {
      name: 'Subtropical',
      climate: 'Moderate temperatures with distinct seasons',
      plants: ['Ashwagandha', 'Amla', 'Brahmi', 'Aloe Vera'],
      characteristics: ['Moderate rainfall', 'Seasonal variation', 'Fertile soil']
    },
    {
      name: 'Temperate',
      climate: 'Cool to moderate temperatures',
      plants: ['Lavender', 'Rosemary', 'Sage', 'Thyme'],
      characteristics: ['Cold winters', 'Mild summers', 'Well-drained soil']
    },
    {
      name: 'Mediterranean',
      climate: 'Dry summers and mild winters',
      plants: ['Oregano', 'Fennel', 'Cinnamon', 'Licorice'],
      characteristics: ['Dry climate', 'Rocky soil', 'Coastal influence']
    }
  ];

  const growingTips: GrowingTip[] = [
    {
      title: 'Soil Preparation',
      description: 'Most medicinal plants prefer well-drained, fertile soil with good organic content.',
      tips: ['Add compost or well-rotted manure', 'Ensure proper drainage', 'Test soil pH (6.0-7.0 ideal)']
    },
    {
      title: 'Watering Guidelines',
      description: 'Different plants have varying water requirements.',
      tips: ['Water early morning or evening', 'Avoid overwatering', 'Check soil moisture regularly']
    },
    {
      title: 'Harvesting Time',
      description: 'Timing is crucial for maximum potency of medicinal compounds.',
      tips: ['Harvest in early morning', 'Choose mature, healthy parts', 'Dry properly for storage']
    },
    {
      title: 'Storage Methods',
      description: 'Proper storage maintains the therapeutic properties of herbs.',
      tips: ['Dry completely before storage', 'Use airtight containers', 'Label with date and name']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-herb-light/30 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Garden
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-herb-primary">
              Plant Growing Guide
            </h1>
            <p className="text-muted-foreground mt-2">
              Complete guide to growing and caring for medicinal plants
            </p>
          </div>
        </div>

        <Tabs defaultValue="seasonal" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="seasonal">Seasonal Guide</TabsTrigger>
            <TabsTrigger value="regional">Regional Guide</TabsTrigger>
            <TabsTrigger value="growing">Growing Tips</TabsTrigger>
            <TabsTrigger value="calendar">Plant Calendar</TabsTrigger>
          </TabsList>

          {/* Seasonal Guide */}
          <TabsContent value="seasonal" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(seasons).map(([key, season]) => (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedSeason === key ? 'ring-2 ring-herb-primary' : ''
                  }`}
                  // 3. Cast the key to the correct type when setting state.
                  onClick={() => setSelectedSeason(key as SeasonKey)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-full ${season.color} mx-auto mb-3 flex items-center justify-center`}>
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold">{season.name}</h3>
                    <p className="text-sm text-muted-foreground">{season.months}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{seasons[selectedSeason].name} Growing Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Plants</h4>
                    <div className="flex flex-wrap gap-2">
                      {/* 4. Explicitly type the map parameter 'plant' as string. */}
                      {seasons[selectedSeason].plants.map((plant: string) => (
                        <Badge key={plant} variant="secondary">{plant}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {/* 5. Explicitly type the map parameters 'activity' and 'index'. */}
                      {seasons[selectedSeason].activities.map((activity: string, index: number) => (
                        <li key={index} className="text-sm flex items-center gap-2">
                          <div className="w-2 h-2 bg-herb-primary rounded-full" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Regional Guide */}
          <TabsContent value="regional" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regions.map((region) => (
                <Card key={region.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      {region.name} Region
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{region.climate}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Suitable Plants</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.plants.map((plant: string) => (
                            <Badge key={plant} variant="outline">{plant}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Characteristics</h4>
                        <ul className="space-y-1">
                          {region.characteristics.map((char: string, index: number) => (
                            <li key={index} className="text-sm flex items-center gap-2">
                              <div className="w-2 h-2 bg-herb-secondary rounded-full" />
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Growing Tips */}
          <TabsContent value="growing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {growingTips.map((tip) => (
                <Card key={tip.title}>
                  <CardHeader>
                    <CardTitle>{tip.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tip.tips.map((item: string, index: number) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <div className="w-2 h-2 bg-herb-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Plant Calendar */}
          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Annual Plant Calendar</CardTitle>
                <p className="text-muted-foreground">
                  Month-by-month guide for planting, caring, and harvesting medicinal plants
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Array.from({ length: 12 }, (_, i) => {
                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    const month = months[i];
                    const activities = i < 3 ? ['Pruning', 'Planning'] : i < 6 ? ['Planting', 'Transplanting'] : i < 9 ? ['Watering', 'Harvesting'] : ['Collecting seeds', 'Drying'];
                    
                    return (
                      <Card key={month} className="p-4">
                        <h4 className="font-semibold mb-2">{month}</h4>
                        <ul className="space-y-1">
                          {activities.map((activity: string, index: number) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {activity}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlantGuide;