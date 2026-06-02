import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function AchievementsSection({
  visibleAchievements,
  isExpanded,
  setIsExpanded,
  hasMoreAchievements,
  allAchievements,
}) {
  return (
    <>
      <h2 className="font-semibold text-xl mt-7">Achievements</h2>
      <p className="text-md font-normal mb-3 md:mb-6">Some of my achievements during my study.</p>

      {/* Achievements Container with transparent bottom effect */}
      <div className="relative">
        <div className="space-y-4">
          {/* Show visible achievements */}
          <AnimatePresence>
            {visibleAchievements.map((achievement, index) => (
              <motion.div
                key={`${achievement.year}-${index}`}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}>
                {/* Year indicator for first achievement of each year */}
                {index === 0 || visibleAchievements[index - 1]?.year !== achievement.year ? (
                  <div className="flex items-center gap-3 mb-3 mt-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">{achievement.year}</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                ) : null}

                {/* Glassmorphism achievement card with monochrome to color effect */}
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
                  <div className="flex items-center gap-4">
                    <div className={`aspect-square w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}>
                      <FontAwesomeIcon icon={achievement.icon} className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm">{achievement.subtitle}</p>
                      <div className="text-xs text-gray-500 mt-1">{achievement.date}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Transparent bottom overlay when not expanded */}
        {!isExpanded && hasMoreAchievements && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stale-300 via-stale/70 to-transparent pointer-events-none"></div>
        )}

        {/* Expand/Collapse Button */}
        {hasMoreAchievements && (
          <motion.div className="flex justify-center mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
              <span>{isExpanded ? `Show Less` : `Show ${allAchievements.length - 6} More`}</span>
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className="h-3 w-3 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
}
