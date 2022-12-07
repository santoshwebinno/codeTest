 public function curlRequest($shop, $accessToken, $lineItems, $customerId, $note){
            $recurringcharge = '{
"query": "mutation draftOrderCreate($input: DraftOrderInput!) { draftOrderCreate(input: $input) { draftOrder { id, invoiceUrl } } }",
 "variables": {
    "input": {
      "note": "'.$note.'",
      "lineItems": '.json_encode($lineItems).'
    }
  }
}';
            $url = 'https://'.$shop.'/admin/api/2021-10/graphql.json';
            $method = 'POST';
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_HTTPHEADER, array(
               'X-Shopify-Access-Token: '.$accessToken,
               'Content-Type: application/json'
               ));
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_VERBOSE, 0);
            curl_setopt($curl, CURLOPT_HEADER, false);
            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $recurringcharge);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($curl, CURLOPT_TIMEOUT, 300);
            $response = curl_exec($curl);
            curl_close($curl);
            return $response; 
        }



        //

        public function curlRequest($shop, $accessToken, $id, $video){
             $recurringcharge = '{
"query": "mutation productCreateMedia($media: [CreateMediaInput!]!, $productId: ID!) { productCreateMedia(media: $media, productId: $productId) { media { alt mediaContentType status } mediaUserErrors { field message } product { id title } } }",
 "variables": {
    "media": {
      "alt": "Video",
      "mediaContentType": "EXTERNAL_VIDEO",
      "originalSource": "'.$video.'"
    },
    "productId": "gid://shopify/Product/'.$id.'"
  }
}';
            $url = 'https://'.$shop.'/admin/api/2022-10/graphql.json';
            $method = 'POST';
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_HTTPHEADER, array(
               'X-Shopify-Access-Token: '.$accessToken,
               'Content-Type: application/json'
               ));
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_VERBOSE, 0);
            curl_setopt($curl, CURLOPT_HEADER, false);
            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $recurringcharge);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($curl, CURLOPT_TIMEOUT, 300);
            $response = curl_exec($curl);
            curl_close($curl);
            return $response; 
        }