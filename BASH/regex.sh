# regex delete everything in between SegmentHistory xml tags


# delete everything in between SegmentHistory xml tags including new lines
sed -e '/<SegmentHistory>/,/<\/SegmentHistory>/d' $1

