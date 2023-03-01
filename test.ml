let a = (n + 1) * n in (n + 2) + (a + n) * 2, 

let ari_seqk n k = addk (n, 1) (fun ar ->
    mulk (ar, n) (fun mr ->
        addk (n, 2) (fun lr ->
            addk (a, n) (fun rr ->
                mulk (rr, 2) (fun rmr ->
                    addk (lr, rmr) k)))));;

let rec list_pos l = 
    match l
    with [] -> []
    | x :: xs -> let rs = list_pos xs in
        if x > 0
        then x :: rs
        else rs;;
        
