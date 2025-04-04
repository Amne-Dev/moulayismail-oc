'use client'

import YouTube from 'react-youtube'

interface YouTubeProps {
  videoId: string
}

export default function YouTubePlayer({ videoId }: YouTubeProps) {
  const opts = {
    height: '315',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  }

  return <YouTube videoId={videoId} opts={opts} />
}