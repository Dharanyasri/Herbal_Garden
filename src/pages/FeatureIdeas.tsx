import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lightbulb, Star, Clock, Users, Zap, Heart, Brain, Camera, MapPin, Calendar, Award, BookOpen, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureIdeas = () => {
  const featureCategories = [
    {
      title: "User Experience & Personalization",
      icon: <Users className="h-5 w-5" />,
      color: "bg-blue-500",
      features: [
        {
          name: "Personal Health Profile",
          description: "Create detailed health profiles with medical history, allergies, and current medications for personalized plant recommendations",
          priority: "High",
          effort: "Medium",
          icon: <Heart className="h-4 w-4" />
        },
        {
          name: "AI-Powered Plant Recommendations",
          description: "Machine learning algorithm that suggests plants based on user's health conditions, location, and preferences",
          priority: "High",
          effort: "High",
          icon: <Brain className="h-4 w-4" />
        },
        {
          name: "Symptom Checker & Plant Matcher",
          description: "Input symptoms and get matched with appropriate medicinal plants and traditional remedies",
          priority: "Medium",
          effort: "Medium",
          icon: <Zap className="h-4 w-4" />
        },
        {
          name: "Personalized Learning Path",
          description: "Customized educational journey based on user's interests in specific AYUSH systems",
          priority: "Medium",
          effort: "Medium",
          icon: <BookOpen className="h-4 w-4" />
        }
      ]
    },
    {
      title: "Interactive & AR Features",
      icon: <Camera className="h-5 w-5" />,
      color: "bg-purple-500",
      features: [
        {
          name: "Plant Identification Camera",
          description: "Use phone camera to identify medicinal plants in real-time with AI image recognition",
          priority: "High",
          effort: "High",
          icon: <Camera className="h-4 w-4" />
        },
        {
          name: "AR Plant Visualization",
          description: "Augmented reality feature to visualize how plants grow and their parts in 3D space",
          priority: "Medium",
          effort: "High",
          icon: <Smartphone className="h-4 w-4" />
        },
        {
          name: "Virtual Garden Planner",
          description: "Plan and design your own medicinal garden with climate and space considerations",
          priority: "Medium",
          effort: "Medium",
          icon: <MapPin className="h-4 w-4" />
        },
        {
          name: "Interactive Preparation Lab",
          description: "Virtual lab where users can practice making herbal preparations with step-by-step guidance",
          priority: "Low",
          effort: "High",
          icon: <Zap className="h-4 w-4" />
        }
      ]
    },
    {
      title: "Community & Social Features",
      icon: <Users className="h-5 w-5" />,
      color: "bg-green-500",
      features: [
        {
          name: "Community Forum",
          description: "Discussion platform for users to share experiences, ask questions, and connect with herbalists",
          priority: "Medium",
          effort: "Medium",
          icon: <Users className="h-4 w-4" />
        },
        {
          name: "Expert Consultation Booking",
          description: "Connect with certified AYUSH practitioners for personalized consultations",
          priority: "High",
          effort: "High",
          icon: <Calendar className="h-4 w-4" />
        },
        {
          name: "Recipe Sharing Platform",
          description: "Users can share their traditional family recipes and herbal preparations",
          priority: "Low",
          effort: "Low",
          icon: <Heart className="h-4 w-4" />
        },
        {
          name: "Local Herbalist Network",
          description: "Find and connect with local herbalists, traditional healers, and medicinal plant suppliers",
          priority: "Medium",
          effort: "Medium",
          icon: <MapPin className="h-4 w-4" />
        }
      ]
    },
    {
      title: "Health Tracking & Monitoring",
      icon: <Heart className="h-5 w-5" />,
      color: "bg-red-500",
      features: [
        {
          name: "Remedy Progress Tracker",
          description: "Track the effectiveness of herbal treatments and monitor health improvements over time",
          priority: "High",
          effort: "Medium",
          icon: <Heart className="h-4 w-4" />
        },
        {
          name: "Dosage Reminder System",
          description: "Smart notifications for taking herbal medicines with proper timing and dosage",
          priority: "Medium",
          effort: "Low",
          icon: <Clock className="h-4 w-4" />
        },
        {
          name: "Health Journal Integration",
          description: "Digital journal to record symptoms, treatments used, and outcomes",
          priority: "Medium",
          effort: "Low",
          icon: <BookOpen className="h-4 w-4" />
        },
        {
          name: "Seasonal Health Calendar",
          description: "Personalized calendar showing optimal times for specific treatments based on traditional wisdom",
          priority: "Low",
          effort: "Medium",
          icon: <Calendar className="h-4 w-4" />
        }
      ]
    },
    {
      title: "Educational & Certification",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-yellow-500",
      features: [
        {
          name: "Certification Courses",
          description: "Structured courses on different AYUSH systems with certificates upon completion",
          priority: "Medium",
          effort: "High",
          icon: <Award className="h-4 w-4" />
        },
        {
          name: "Interactive Learning Modules",
          description: "Gamified learning experience with quizzes, challenges, and progress tracking",
          priority: "Medium",
          effort: "Medium",
          icon: <Brain className="h-4 w-4" />
        },
        {
          name: "Traditional Stories & Folklore",
          description: "Rich collection of stories and cultural context behind medicinal plants",
          priority: "Low",
          effort: "Low",
          icon: <BookOpen className="h-4 w-4" />
        },
        {
          name: "Multi-language Support",
          description: "Content available in multiple regional languages with audio pronunciation guides",
          priority: "Medium",
          effort: "Medium",
          icon: <Users className="h-4 w-4" />
        }
      ]
    },
    {
      title: "Advanced Technology Integration",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-indigo-500",
      features: [
        {
          name: "IoT Garden Monitoring",
          description: "Smart sensors to monitor soil, humidity, and plant health in real medicinal gardens",
          priority: "Low",
          effort: "High",
          icon: <Zap className="h-4 w-4" />
        },
        {
          name: "Blockchain Authenticity Verification",
          description: "Verify the authenticity and source of medicinal plants and products",
          priority: "Low",
          effort: "High",
          icon: <Award className="h-4 w-4" />
        },
        {
          name: "Voice-Activated Assistant",
          description: "Voice commands for hands-free access to plant information while gardening or preparing remedies",
          priority: "Low",
          effort: "Medium",
          icon: <Smartphone className="h-4 w-4" />
        },
        {
          name: "Predictive Health Analytics",
          description: "AI-powered predictions for health trends and preventive care recommendations",
          priority: "Low",
          effort: "High",
          icon: <Brain className="h-4 w-4" />
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'High': return 'bg-purple-100 text-purple-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-herb-light/30 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-herb-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Garden
          </Link>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-herb-primary/10 rounded-full">
                <Lightbulb className="h-8 w-8 text-herb-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-herb-primary mb-4">Feature Ideas & Roadmap</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exciting features and enhancements planned for the Virtual Herbal Garden platform
            </p>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="space-y-8">
          {featureCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="herb-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 ${category.color} text-white rounded-lg`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {category.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="border border-herb-primary/10 hover:border-herb-primary/30 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-1 bg-herb-light rounded">
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-herb-primary mb-1">{feature.name}</h4>
                            <div className="flex gap-2 mb-2">
                              <Badge className={getPriorityColor(feature.priority)}>
                                {feature.priority} Priority
                              </Badge>
                              <Badge className={getEffortColor(feature.effort)}>
                                {feature.effort} Effort
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Implementation Timeline */}
        <Card className="mt-8 herb-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Suggested Implementation Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Phase 1 (0-3 months)</h3>
                <p className="text-sm text-red-700">High Priority Features</p>
                <ul className="text-xs text-red-600 mt-2 space-y-1">
                  <li>• Personal Health Profile</li>
                  <li>• Plant Identification Camera</li>
                  <li>• Expert Consultation Booking</li>
                  <li>• Remedy Progress Tracker</li>
                </ul>
              </div>
              
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-800 mb-2">Phase 2 (3-6 months)</h3>
                <p className="text-sm text-yellow-700">Medium Priority Features</p>
                <ul className="text-xs text-yellow-600 mt-2 space-y-1">
                  <li>• AI Plant Recommendations</li>
                  <li>• Community Forum</li>
                  <li>• Interactive Learning Modules</li>
                  <li>• Virtual Garden Planner</li>
                </ul>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Phase 3 (6+ months)</h3>
                <p className="text-sm text-green-700">Advanced Features</p>
                <ul className="text-xs text-green-600 mt-2 space-y-1">
                  <li>• AR Plant Visualization</li>
                  <li>• IoT Garden Monitoring</li>
                  <li>• Blockchain Verification</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-botanical text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-herb-primary mb-4">Have More Ideas?</h2>
            <p className="text-muted-foreground mb-6">
              We'd love to hear your suggestions for making the Virtual Herbal Garden even better!
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-herb-primary hover:bg-herb-secondary">
                Submit Feature Request
              </Button>
              <Button variant="outline" className="border-herb-primary text-herb-primary">
                Join Beta Testing
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeatureIdeas;