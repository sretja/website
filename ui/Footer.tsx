import { RoughNotation } from "react-rough-notation"
import cx from "clsx"
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"

export const Footer = () => {
  return (
    <div className="mt-24 pb-36">
      <div className="max-w-4xl px-4 mx-auto text-gray-800">
        <div className="pb-8 mb-2 border-t-2 border-gray-300"></div>
        <div className="flex flex-col justify-between lg:flex-row">
          <p>Built with Tailwind and Next.js 🖤</p>
          <div className="pt-2 space-x-6 font-medium lg:pt-0">
            <a
              href="https://twitter.com/delba_oliveira"
              className={cx(
                "transition-colors hover:text-sky-500 focus:text-sky-500 rounded",
                FOCUS_VISIBLE_OUTLINE,
              )}
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/c/delba"
              className={cx(
                "transition-colors hover:text-sky-500 focus:text-sky-500 rounded",
                FOCUS_VISIBLE_OUTLINE,
              )}
            >
              YouTube
            </a>
            <a
              href="https://github.com/delbaoliveira"
              className={cx(
                "transition-colors hover:text-sky-500 focus:text-sky-500 rounded",
                FOCUS_VISIBLE_OUTLINE,
              )}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
