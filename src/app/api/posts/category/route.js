import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '@/lib'
const postDir = process.cwd() + '/src/content';
const searchJsonDir = process.cwd() + '/src/config';
import { slugify } from '@/lib'

const getPosts = async function (slug) {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join(postDir))
  // Get slug and frontmatter from posts

  let tempStorage = []

  // Get slug and frontmatter from posts

  files.map((filename) => {

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(postDir, filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    if (frontmatter.draft === false) {
      frontmatter.categories.map(
        category => {
          let categroySlug = slugify(category)
          if (slug === categroySlug) {
            tempStorage.push({ post: frontmatter })
          }
        }
      )
    } else {
      return null
    }
  })

  //  remove null in tempPosts 
  const posts = tempStorage.filter(
    post => {
      return post && post
    }
  )

  return {
    props: {
      posts
    },
  }
}


export async function POST(req, res) {
  const data = await req.json();
  const posts = await getPosts(data.slug);
  return NextResponse.json(posts)
}

