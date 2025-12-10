import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { originalIdeas, newIdeas, getRankedIdeas } from '../data/projectIdeas';

export default function ProjectIdeas() {
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [showNewIdeas, setShowNewIdeas] = useState(false);
  
  const rankedOriginal = getRankedIdeas(originalIdeas);
  const rankedNew = getRankedIdeas(newIdeas);
  const currentIdeas = showNewIdeas ? rankedNew : rankedOriginal;

  const getRatingColor = (score) => {
    if (score >= 70) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getDifficultyColor = (rating) => {
    if (rating <= 3) return 'bg-green-500/20 text-green-400';
    if (rating <= 5) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-red-500/20 text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              💡 Solo Dev Project Ideas Analysis
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              Comprehensive evaluation of 20 app ideas for solo developers using AI coding agents. 
              Each idea is analyzed for market size, competition, profitability, and implementation feasibility.
            </p>
            
            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setShowNewIdeas(false)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  !showNewIdeas 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Original 10 Ideas
              </button>
              <button
                onClick={() => setShowNewIdeas(true)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  showNewIdeas 
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                New 10 Ideas
              </button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-blue-400">
                  {currentIdeas.filter(i => i.marketSize.rating.includes('Large')).length}
                </div>
                <div className="text-sm text-gray-400">Large Market</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-green-400">
                  {currentIdeas.filter(i => i.competition.level.includes('Low')).length}
                </div>
                <div className="text-sm text-gray-400">Low Competition</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-yellow-400">
                  {currentIdeas.filter(i => i.implementation.rating <= 5).length}
                </div>
                <div className="text-sm text-gray-400">Easy-Medium Difficulty</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl font-bold text-purple-400">
                  {currentIdeas.filter(i => i.timeToDeployment.estimate.includes('1-') || i.timeToDeployment.estimate.includes('2-') || i.timeToDeployment.estimate.includes('3-') || i.timeToDeployment.estimate.includes('4-')).length}
                </div>
                <div className="text-sm text-gray-400">Under 5 Weeks</div>
              </div>
            </div>
          </div>

          {/* My Top Pick for $10K MRR */}
          <div className="mb-12 bg-gradient-to-r from-emerald-900/50 via-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/20">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🎯</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-3xl font-bold text-emerald-400">My Top Pick for $10K MRR</h2>
                  <span className="px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-bold animate-pulse">
                    HIGHEST POTENTIAL
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Voice-to-Invoice for Contractors</h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  This is the one I&apos;d build. Here&apos;s why it can hit $10K MRR within 6-9 months as a solo dev:
                </p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-black/30 rounded-lg p-4 border border-emerald-500/30">
                    <div className="text-emerald-400 font-bold mb-2">💰 Path to $10K MRR</div>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• <strong>667 users @ $14.99/mo</strong> = $10K MRR</li>
                      <li>• Or <strong>334 users @ $29.99/mo</strong> (Premium tier)</li>
                      <li>• Massive TAM: 15M+ contractors in US alone</li>
                      <li>• Only need 0.004% market penetration</li>
                      <li>• High retention (invoicing is mission-critical)</li>
                    </ul>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-emerald-500/30">
                    <div className="text-emerald-400 font-bold mb-2">🚀 Why It Works</div>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• <strong>Real pain point:</strong> Contractors hate paperwork</li>
                      <li>• <strong>Daily usage:</strong> Every job needs an invoice</li>
                      <li>• <strong>Word of mouth:</strong> Contractors talk at supply stores</li>
                      <li>• <strong>Low churn:</strong> Switching cost high once adopted</li>
                      <li>• <strong>Upsell path:</strong> Add payment processing for 2.9% fee</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-emerald-500/30 mb-6">
                  <div className="text-emerald-400 font-bold mb-3 text-lg">📈 Growth Strategy (Realistic Timeline)</div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400 mb-1">Month 1-2</div>
                      <div className="text-white font-bold">Build MVP</div>
                      <div className="text-gray-500">3-4 weeks</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Month 3-4</div>
                      <div className="text-white font-bold">50 Beta Users</div>
                      <div className="text-gray-500">$750 MRR</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Month 5-7</div>
                      <div className="text-white font-bold">300 Users</div>
                      <div className="text-gray-500">$4.5K MRR</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Month 8-9</div>
                      <div className="text-white font-bold">700+ Users</div>
                      <div className="text-emerald-400 font-bold">$10K+ MRR</div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-5 border border-emerald-500/30">
                  <div className="text-emerald-400 font-bold mb-3 text-lg">🎯 Go-to-Market Strategy</div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-white font-semibold mb-2">Month 1-3: Foundation</div>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Post in contractor Facebook groups (free)</li>
                        <li>• Visit Home Depot/Lowe&apos;s parking lots (guerrilla)</li>
                        <li>• Create TikTok showing 30-second invoice</li>
                        <li>• SEO: &quot;invoice app for contractors&quot;</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-2">Month 4-6: Traction</div>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Partner with local trade schools</li>
                        <li>• Facebook ads ($500/mo in local markets)</li>
                        <li>• Referral program: 1 month free</li>
                        <li>• Construction podcast sponsorships</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-2">Month 7-9: Scale</div>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Google Ads ($1-2K/mo)</li>
                        <li>• Partnership with supply stores</li>
                        <li>• Contractor association sponsorships</li>
                        <li>• LinkedIn for commercial contractors</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-emerald-400">Why I&apos;m confident:</strong> This isn&apos;t competing with tech-savvy users who comparison shop. 
                    Contractors value TIME over money. If your app saves them 10 minutes per invoice (3-5 invoices/week), 
                    that&apos;s 2-4 hours/month saved. At $50-100/hour labor rates, that&apos;s $100-400/month value for a $15-30/month subscription. 
                    The ROI is obvious, and they&apos;ll pay forever once they adopt it.
                  </p>
                </div>

                <div className="mt-4 flex gap-4">
                  <div className="flex-1 text-center bg-black/40 rounded-lg p-3 border border-emerald-500/30">
                    <div className="text-2xl font-bold text-emerald-400">65-75%</div>
                    <div className="text-xs text-gray-400">Profit Margin</div>
                  </div>
                  <div className="flex-1 text-center bg-black/40 rounded-lg p-3 border border-emerald-500/30">
                    <div className="text-2xl font-bold text-emerald-400">5/8</div>
                    <div className="text-xs text-gray-400">Difficulty</div>
                  </div>
                  <div className="flex-1 text-center bg-black/40 rounded-lg p-3 border border-emerald-500/30">
                    <div className="text-2xl font-bold text-emerald-400">3-4 wks</div>
                    <div className="text-xs text-gray-400">Build Time</div>
                  </div>
                  <div className="flex-1 text-center bg-black/40 rounded-lg p-3 border border-emerald-500/30">
                    <div className="text-2xl font-bold text-emerald-400">$300-800M</div>
                    <div className="text-xs text-gray-400">TAM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 gap-6">
            {currentIdeas.map((idea, index) => (
              <div
                key={idea.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
                onClick={() => setSelectedIdea(selectedIdea?.id === idea.id ? null : idea)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-gray-600">#{index + 1}</span>
                      <h3 className="text-2xl font-bold text-white">{idea.name}</h3>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {idea.category}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">{idea.description}</p>
                  </div>
                  <div className={`text-3xl font-bold ${getRatingColor(idea.score)} ml-4`}>
                    {idea.score}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-5 gap-4 mb-4">
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Market</div>
                    <div className="text-sm font-semibold text-blue-400">{idea.marketSize.rating}</div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Competition</div>
                    <div className="text-sm font-semibold text-yellow-400">{idea.competition.level}</div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Margin</div>
                    <div className="text-sm font-semibold text-green-400">{idea.profitMargin.estimate}</div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Difficulty</div>
                    <div className={`text-sm font-semibold px-2 py-1 rounded ${getDifficultyColor(idea.implementation.rating)}`}>
                      {idea.implementation.rating}/8
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Time</div>
                    <div className="text-sm font-semibold text-purple-400">{idea.timeToDeployment.estimate}</div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedIdea?.id === idea.id && (
                  <div className="mt-6 pt-6 border-t border-gray-700 space-y-6">
                    {/* Market Size */}
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">📊 Market Analysis</h4>
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <div className="mb-2">
                          <span className="text-gray-400">TAM: </span>
                          <span className="text-white font-semibold">{idea.marketSize.tam}</span>
                        </div>
                        <p className="text-gray-400">{idea.marketSize.description}</p>
                      </div>
                    </div>

                    {/* Competition */}
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-400 mb-2">🏆 Competition & Pricing</h4>
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <div className="mb-3">
                          <span className="text-gray-400">Competitors: </span>
                          <span className="text-white">{idea.competition.competitors.join(', ')}</span>
                        </div>
                        <div className="mb-3">
                          <span className="text-gray-400">Pricing: </span>
                          <span className="text-green-400 font-semibold">{idea.competition.pricing}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Differentiation: </span>
                          <span className="text-white">{idea.competition.differentiation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Profit Margin */}
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-2">💰 Profitability</h4>
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <div className="mb-2">
                          <span className="text-gray-400">Estimated Margin: </span>
                          <span className="text-green-400 font-bold text-xl">{idea.profitMargin.estimate}</span>
                        </div>
                        <p className="text-gray-400">{idea.profitMargin.reasoning}</p>
                      </div>
                    </div>

                    {/* Implementation */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">⚙️ Implementation</h4>
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <div className="mb-3">
                          <span className="text-gray-400">Difficulty: </span>
                          <span className={`font-semibold px-3 py-1 rounded ${getDifficultyColor(idea.implementation.rating)}`}>
                            {idea.implementation.difficulty} ({idea.implementation.rating}/8)
                          </span>
                        </div>
                        <p className="text-gray-400 mb-4">{idea.implementation.explanation}</p>
                        
                        <div className="mb-3">
                          <div className="text-sm font-semibold text-gray-300 mb-2">Time Breakdown:</div>
                          <div className="space-y-1 text-sm">
                            {Object.entries(idea.timeToDeployment.breakdown).map(([phase, time]) => (
                              <div key={phase} className="flex justify-between">
                                <span className="text-gray-400 capitalize">{phase}:</span>
                                <span className="text-white">{time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">🛠️ Tech Stack</h4>
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <p className="text-gray-300">{idea.technicalStack}</p>
                      </div>
                    </div>

                    {/* Monetization */}
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-400 mb-2">💵 Monetization</h4>
                      <div className="bg-gray-900/50 rounded-lg p-4">
                        <ul className="space-y-2">
                          {idea.monetization.map((method, i) => (
                            <li key={i} className="text-gray-300 flex items-start">
                              <span className="text-emerald-400 mr-2">•</span>
                              {method}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Viral Potential & Risks */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-pink-400 mb-2">🚀 Viral Potential</h4>
                        <div className="bg-gray-900/50 rounded-lg p-4">
                          <p className="text-gray-300">{idea.viralPotential}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-red-400 mb-2">⚠️ Risks</h4>
                        <div className="bg-gray-900/50 rounded-lg p-4">
                          <ul className="space-y-1">
                            {idea.risks.map((risk, i) => (
                              <li key={i} className="text-gray-300 text-sm flex items-start">
                                <span className="text-red-400 mr-2">•</span>
                                {risk}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-semibold"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIdea(selectedIdea?.id === idea.id ? null : idea);
                  }}
                >
                  {selectedIdea?.id === idea.id ? '▲ Show Less' : '▼ Show Details'}
                </button>
              </div>
            ))}
          </div>

          {/* Methodology */}
          <div className="mt-12 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">📋 Evaluation Methodology</h2>
            <p className="text-gray-400 mb-4">
              Each idea is scored (0-100) based on weighted criteria designed for solo developers using AI coding agents:
            </p>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">25%</div>
                <div className="text-sm text-gray-400">Market Size</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400 mb-1">20%</div>
                <div className="text-sm text-gray-400">Competition</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400 mb-1">20%</div>
                <div className="text-sm text-gray-400">Profit Margin</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400 mb-1">20%</div>
                <div className="text-sm text-gray-400">Implementation</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-pink-400 mb-1">15%</div>
                <div className="text-sm text-gray-400">Time to Deploy</div>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              All time estimates assume a solo developer using AI coding agents (Cursor, Bolt, v0, Claude/GPT-4) and modern tech stacks.
              Difficulty ratings (1-8) reflect implementation complexity for a developer with moderate full-stack experience.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Analysis based on &quot;How to Build Apps That Make Money&quot; framework</p>
            <p className="mt-2">Rankings updated: December 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
