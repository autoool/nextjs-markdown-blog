import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '@/lib'
const postDir = process.cwd() + '/src/content';
const searchJsonDir = process.cwd() + '/src/config';

const getPosts = async function () {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join(postDir))
    // Get slug and frontmatter from posts
    const tempPosts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join(postDir, filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        if (frontmatter.draft === false) {
            return {
                slug,
                frontmatter,
            }
        } else {
            return null
        }

    })

    //  remove null in tempPosts 
    const posts = tempPosts.filter(
        post => {
            return post && post
        }
    )
    const jsonString = JSON.stringify(posts)
    fs.writeFileSync(searchJsonDir + '/search.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}



export async function GET() {
    return NextResponse.json([{ 'name': 'sam' }])
}

export async function POST() {
    const posts = await getPosts();
    return NextResponse.json(posts)
}