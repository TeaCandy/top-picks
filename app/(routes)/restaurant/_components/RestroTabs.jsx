import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuSection from './MenuSection'
import ReviewSection from './ReviewSection'


function RestroTabs({restaurant}) {
  return (
    <Tabs defaultValue="category" className="w-full mt-10">
  <TabsList>
    <TabsTrigger value="category">Menu Categories</TabsTrigger>
    {/* <TabsTrigger value="about">About</TabsTrigger> */}
    <TabsTrigger value="reviews">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="category">
    <MenuSection restaurant={restaurant}/>
  </TabsContent>
  <TabsContent value="about">About</TabsContent>
  
  <TabsContent value="reviews">
    <ReviewSection restaurant={restaurant} />
  </TabsContent>
</Tabs>

  )
}

export default RestroTabs