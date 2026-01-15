import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { InfoBox } from "@/components/InfoBox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessagesSquare, ArrowRight, CheckCircle, XCircle, User, Bot, ExternalLink, PartyPopper, Sparkles, AlertCircle } from "lucide-react";

const MultiTurn = () => {
  return (
    <Layout>
      <PageHeader
        icon={MessagesSquare}
        title="Multi-Turn Tasks"
        description="Welcome to the final phase of Project Sapphire"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Thank You Section */}
          <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <PartyPopper className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-foreground">You've Reached the Final Phase</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We want to take a moment to say thank you. The work you've done to help us build a large set of high-quality single-turn and multimodal tasks is complete, and it genuinely matters. Hitting this milestone for Project Sapphire wouldn't have been possible without the care and consistency you brought to it.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Now we're in the final stretch: <span className="font-semibold text-foreground">multi-turn tasks</span>. We still need several hundred conversational tasks to wrap things up, and we're grateful you're here for this last part. Thanks for sticking with the project and helping us bring it across the finish line.
                </p>
              </div>
            </div>
          </div>

          {/* Evolution Timeline */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">How We Got Here</h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                <Badge variant="outline" className="shrink-0">Phase 1</Badge>
                <div>
                  <p className="font-medium text-foreground">Single-Turn, Text-Only</p>
                  <p className="text-sm text-muted-foreground">User writes a shopping request → Model responds. Simple and direct.</p>
                </div>
                <CheckCircle className="h-5 w-5 text-chart-1 ml-auto shrink-0" />
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                <Badge variant="outline" className="shrink-0">Phase 2</Badge>
                <div>
                  <p className="font-medium text-foreground">Multimodal (With Images)</p>
                  <p className="text-sm text-muted-foreground">User writes a shopping request + attaches an image → Model responds.</p>
                </div>
                <CheckCircle className="h-5 w-5 text-chart-1 ml-auto shrink-0" />
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg border border-primary bg-primary/5">
                <Badge className="shrink-0">Phase 3</Badge>
                <div>
                  <p className="font-medium text-foreground">Multi-Turn Conversations</p>
                  <p className="text-sm text-muted-foreground">Multiple back-and-forth exchanges before making a shopping request.</p>
                </div>
                <Sparkles className="h-5 w-5 text-primary ml-auto shrink-0" />
              </div>
            </div>
          </section>

          {/* What is Multi-Turn */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">What is a Multi-Turn Task?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Instead of one prompt and one response, multi-turn tasks involve a <span className="font-semibold text-foreground">conversation</span> with multiple back-and-forth exchanges before arriving at a shopping request.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-medium text-foreground mb-2">What counts as one turn?</p>
                  <p className="text-sm text-muted-foreground">One turn = a user message + a model response. Half a turn would be just one of those.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-medium text-foreground mb-2">How many turns?</p>
                  <p className="text-sm text-muted-foreground">Tasks will typically be <span className="font-semibold">2–5 turns</span>. The exact number will be specified in your task.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-medium text-foreground mb-2">Can it include images?</p>
                  <p className="text-sm text-muted-foreground">Yes! Multi-turn tasks can be text-only or multimodal. Your task will specify which.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-medium text-foreground mb-2">When do I write the rubric?</p>
                  <p className="text-sm text-muted-foreground">At the very end, after the full conversation. The rubric evaluates the entire conversation.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Task Setup */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">What You'll See When You Start</h2>
            <p className="text-muted-foreground leading-relaxed">
              Before you begin the conversation, the platform will show you everything you need to know about your task:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-medium">1</div>
                <div>
                  <p className="font-medium text-foreground">Task Type</p>
                  <p className="text-sm text-muted-foreground">You'll be told if your task is <span className="font-semibold">"Must Include Image"</span> or <span className="font-semibold">"Text Only"</span>.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-medium">2</div>
                <div>
                  <p className="font-medium text-foreground">Use Case</p>
                  <p className="text-sm text-muted-foreground">You'll be assigned a use case category, just like before.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-medium">3</div>
                <div>
                  <p className="font-medium text-foreground">Number of Turns</p>
                  <p className="text-sm text-muted-foreground">You'll see exactly how many turns you need to complete (e.g., 3 turns, 4 turns, etc.).</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-medium">4</div>
                <div>
                  <p className="font-medium text-foreground">Planning Block</p>
                  <p className="text-sm text-muted-foreground">You'll have a space to plan your conversation before starting. This is <span className="font-semibold">not evaluated</span>—it's just for you. Jot down rough ideas for what you might discuss during each turn so you don't run out of things to say before your shopping request.</p>
                </div>
              </div>
            </div>
            
            <InfoBox type="info" title="Why Plan Ahead?">
              Planning helps you avoid running out of natural conversation topics before you reach your required turns. A quick outline of "Turn 1: context about my situation, Turn 2: answer their question about timing, Turn 3: mention my constraints..." keeps the flow smooth and avoids contrived filler.
            </InfoBox>
          </section>

          {/* How It Works */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</div>
                <div>
                  <p className="font-medium text-foreground">Start a natural conversation</p>
                  <p className="text-sm text-muted-foreground">Begin with situational context—don't jump straight to shopping. Think about how real conversations unfold.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</div>
                <div>
                  <p className="font-medium text-foreground">Exchange back and forth</p>
                  <p className="text-sm text-muted-foreground">The model will respond, ask questions, and engage. You respond naturally, building toward your eventual request.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</div>
                <div>
                  <p className="font-medium text-foreground">Select "No" after each turn until you're done</p>
                  <p className="text-sm text-muted-foreground">After <span className="font-semibold">every single turn</span>, a pop-up will ask "Would you like to end this conversation?" Keep selecting <span className="font-semibold">No</span> until you've completed your required number of turns. Only select <span className="font-semibold">Yes</span> on your final turn.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">4</div>
                <div>
                  <p className="font-medium text-foreground">End and make your shopping request</p>
                  <p className="text-sm text-muted-foreground">Once you've hit the required turns, say <span className="font-semibold">Yes</span> to end. Then you'll be prompted to write your explicit shopping request. <span className="font-semibold text-destructive">Images can ONLY be attached here on this final turn</span>—never during earlier conversation turns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">5</div>
                <div>
                  <p className="font-medium text-foreground">Write your rubric</p>
                  <p className="text-sm text-muted-foreground">Evaluate the model's final shopping response based on the entire conversation context.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Critical Rules */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Critical Rules</h2>
            
            <InfoBox type="error" title="No Shopping Requests Until the End">
              Do <strong>not</strong> ask for product recommendations during the conversation. The shopping request only happens at the very end, after you exit the conversation and are explicitly prompted.
            </InfoBox>

            <InfoBox type="success" title="Be Natural and Conversational">
              This is the most important thing. The conversation should feel like a real chat—not a series of prompts. Be situational, be organic, let the dialogue flow naturally toward a shopping need.
            </InfoBox>

            <InfoBox type="info" title="Shorter Messages Are Fine">
              Unlike single-turn prompts where you pack everything into one message, each turn in a conversation can be just a couple of sentences. More detail helps with the rubric, but you don't need a paragraph every time.
            </InfoBox>
          </section>

          {/* Example Conversation */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Example Conversation</h2>
            <p className="text-sm text-muted-foreground">Here's what a 4-turn multi-turn conversation might look like:</p>
            
            <div className="space-y-3 rounded-xl border border-border bg-card p-6">
              {/* Turn 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <Badge variant="outline" className="text-xs">Turn 1</Badge>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-secondary/50 px-4 py-2 text-sm">
                    I'm traveling to Spain in the fall. It's going to be the rainy season when I go.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-muted px-4 py-2 text-sm">
                    That sounds exciting! Where in Spain are you thinking of going, and what months are you looking at?
                  </div>
                </div>
              </div>

              {/* Turn 2 */}
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <Badge variant="outline" className="text-xs">Turn 2</Badge>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-secondary/50 px-4 py-2 text-sm">
                    I'm going to Madrid in late November. So it's going to be pretty chilly too.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-muted px-4 py-2 text-sm">
                    Nice choice! Have you thought about what you want to do there? Are you more into food, shopping, or art?
                  </div>
                </div>
              </div>

              {/* Turn 3 */}
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <Badge variant="outline" className="text-xs">Turn 3</Badge>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-secondary/50 px-4 py-2 text-sm">
                    Yeah, I have a couple of museums I want to visit. And I'm going to try this specific Spanish dish I've been excited about.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-muted px-4 py-2 text-sm">
                    That sounds great! How long are you going for?
                  </div>
                </div>
              </div>

              {/* Turn 4 */}
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <Badge variant="outline" className="text-xs">Turn 4</Badge>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-secondary/50 px-4 py-2 text-sm">
                    About a week. I'm trying to pack light but I know I'll be walking around a lot outdoors.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-muted px-4 py-2 text-sm">
                    Walking around Madrid in November sounds wonderful. Is there anything specific you're trying to prepare for the trip?
                  </div>
                </div>
              </div>

              {/* End conversation */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-chart-3/10 border border-chart-3/30">
                  <CheckCircle className="h-4 w-4 text-chart-3" />
                  <span className="text-sm font-medium">User selects "Yes" to end the conversation</span>
                </div>
              </div>

              {/* Shopping Request */}
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <Badge className="text-xs bg-primary">Shopping Request</Badge>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-secondary/50 px-4 py-2 text-sm">
                    Can you help me find a good rain jacket for my trip? Something lightweight and packable that can handle the November weather in Madrid.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-lg bg-muted px-4 py-2 text-sm italic text-muted-foreground">
                    [Model provides shopping recommendations...]
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              <ArrowRight className="h-4 w-4 inline mr-1" />
              After the model responds with recommendations, you write a rubric evaluating the entire conversation.
            </p>
          </section>

          {/* Video Walkthrough */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Video Walkthrough</h2>
            <p className="text-muted-foreground">Watch this walkthrough to see how multi-turn tasks work on the platform:</p>
            
            <div className="bg-destructive/20 border-2 border-destructive rounded-lg p-6 animate-pulse">
              <div className="flex items-start gap-4">
                <div className="bg-destructive text-destructive-foreground rounded-full p-2 flex-shrink-0">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-destructive mb-2">⚠️ IMPORTANT: Read Before Watching ⚠️</h3>
                  <p className="text-foreground font-medium">
                    The video may mention that you can add a photo at any point during the conversation. <strong className="text-destructive">This has changed.</strong> Images can <strong className="underline">ONLY</strong> be attached on the <strong className="underline">last turn</strong> with your final shopping request—never during any earlier turns of the conversation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessagesSquare className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-lg">Multi-Turn Task Walkthrough</h3>
              </div>
              <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.loom.com/embed/77666eab39d541e0859ce82cd74522f0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-8 text-center space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Questions? We're Here to Help</h2>
              <p className="text-muted-foreground">
                If anything is unclear or you run into issues, reach out on Discord. We'll also have office hours available for live support.
              </p>
              <Button asChild size="lg">
                <a href="https://discord.gg/msQJebuFHC" target="_blank" rel="noopener noreferrer" className="gap-2">
                  Join Discord
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default MultiTurn;
